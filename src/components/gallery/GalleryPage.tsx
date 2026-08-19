"use client";

import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useLanguage } from "@/components/landing/use-language";
import { Reveal } from "@/components/landing/Reveal";
import { galleryImages, type GalleryCategory } from "./gallery-data";

const CATEGORIES: { id: GalleryCategory | "all"; vi: string; en: string }[] = [
  { id: "all", vi: "Tất cả", en: "All" },
  { id: "exterior", vi: "Ngoại thất", en: "Exterior" },
  { id: "public", vi: "Không gian chung", en: "Public spaces" },
  { id: "dining", vi: "Nhà hàng", en: "Dining" },
  { id: "entertainment", vi: "Giải trí", en: "Entertainment" },
  { id: "wellness", vi: "Spa", en: "Spa" },
  { id: "deck", vi: "Sundeck", en: "Sundeck" },
  { id: "cabins", vi: "Phòng nghỉ", en: "Cabins" },
];

export function GalleryPage() {
  const { lang, setLang, t } = useLanguage();
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [active, setActive] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === "all" ? galleryImages : galleryImages.filter((i) => i.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  const current = active === null ? null : images[active];

  return (
    <div className="min-h-screen bg-zenova-ivory">
      <Header lang={lang} setLang={setLang} t={t} />

      <main className="pt-32 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-6 text-zenova-gold">
              {lang === "vi" ? "THƯ VIỆN" : "GALLERY"}
            </p>
            <h1 className="mb-4 text-4xl tracking-[0.02em] text-zenova-ink sm:text-5xl">
              {lang === "vi" ? "Zenova qua từng góc nhìn" : "Zenova in every view"}
            </h1>
            <p className="text-zenova-stone/85">
              {lang === "vi"
                ? "Toàn bộ không gian trên du thuyền: ngoại thất, nhà hàng, giải trí, spa và phòng nghỉ."
                : "Every space aboard: exterior, dining, entertainment, spa and cabins."}
            </p>
          </Reveal>

          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setFilter(c.id);
                  setActive(null);
                }}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  filter === c.id
                    ? "border-zenova-ink bg-zenova-ink text-zenova-ivory"
                    : "border-zenova-ink/15 text-zenova-ink/70 hover:border-zenova-ink/40 hover:text-zenova-ink"
                }`}
              >
                {lang === "vi" ? c.vi : c.en}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-sm bg-zenova-ink/5 text-left"
              >
                <img
                  src={img.src}
                  alt={lang === "vi" ? img.titleVi : img.titleEn}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.24em] text-zenova-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {lang === "vi" ? img.titleVi : img.titleEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {current ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-zenova-ink/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 text-zenova-ivory/80 hover:text-zenova-ivory"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            className="absolute left-4 text-zenova-ivory/70 hover:text-zenova-ivory"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={current.src}
              alt={lang === "vi" ? current.titleVi : current.titleEn}
              className="max-h-[80vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/80">
              {lang === "vi" ? current.titleVi : current.titleEn}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 text-zenova-ivory/70 hover:text-zenova-ivory"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % images.length));
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      ) : null}

      <Footer t={t} />
    </div>
  );
}
