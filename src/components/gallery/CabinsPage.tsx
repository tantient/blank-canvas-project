"use client";

import { Link } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useLanguage } from "@/components/landing/use-language";
import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";
import { cabinTypes } from "./cabins-data";

const QUOTE_LINK = "https://zalo.me/";

export function CabinsPage() {
  const { lang, setLang, t } = useLanguage();
  const vi = lang === "vi";

  return (
    <div className="min-h-screen bg-zenova-ivory">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
          <img
            src={cabinTypes[0]!.hero}
            alt={vi ? "Phòng nghỉ trên Zenova Cruise" : "Cabins aboard Zenova Cruise"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zenova-ink/85 via-zenova-ink/30 to-zenova-ink/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
              <p className="eyebrow mb-5 text-zenova-gold">
                {vi ? "PHÒNG NGHỈ" : "CABINS"}
              </p>
              <h1 className="max-w-3xl text-4xl tracking-[0.02em] text-zenova-ivory sm:text-5xl">
                {vi ? "Giấc ngủ giữa lòng vịnh" : "Sleep in the heart of the bay"}
              </h1>
              <p className="mt-4 max-w-xl text-zenova-ivory/85">
                {vi
                  ? "40 phòng nghỉ hướng biển, mỗi hạng phòng là một cách cảm nhận khác nhau về Hạ Long."
                  : "Forty sea-facing cabins, each category offering its own way of experiencing Ha Long."}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-24 px-6 py-24 lg:space-y-32 lg:px-8 lg:py-32">
          {cabinTypes.map((cabin, index) => {
            const flip = index % 2 === 1;
            return (
              <section key={cabin.id} id={cabin.id} className="scroll-mt-28">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <div className="overflow-hidden rounded-sm bg-zenova-ink/5">
                      <img
                        src={cabin.hero}
                        alt={vi ? cabin.nameVi : cabin.nameEn}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={120}>
                    <p className="eyebrow mb-5 text-zenova-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mb-4 text-3xl tracking-[0.02em] text-zenova-ink sm:text-4xl">
                      {vi ? cabin.nameVi : cabin.nameEn}
                    </h2>
                    <p className="mb-6 text-zenova-stone/85">{vi ? cabin.descVi : cabin.descEn}</p>

                    <div className="mb-6 flex gap-8 border-y border-zenova-ink/10 py-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-zenova-stone/70">
                          {vi ? "Diện tích" : "Area"}
                        </p>
                        <p className="mt-1 text-zenova-ink">{cabin.area}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-zenova-stone/70">
                          {vi ? "Tầm nhìn" : "View"}
                        </p>
                        <p className="mt-1 text-zenova-ink">{cabin.view}</p>
                      </div>
                    </div>

                    <ul className="grid gap-2 sm:grid-cols-2">
                      {(vi ? cabin.amenitiesVi : cabin.amenitiesEn).map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-zenova-stone/85">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zenova-gold" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/cabins/$cabinId"
                      params={{ cabinId: cabin.id }}
                      className="mt-8 inline-block border-b border-zenova-gold pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zenova-ink hover:text-zenova-gold"
                    >
                      {vi ? "Xem chi tiết phòng" : "View cabin details"}
                    </Link>
                  </Reveal>
                </div>

                <div className="mt-6 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
                  {cabin.gallery.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${vi ? cabin.nameVi : cabin.nameEn} ${i + 2}`}
                      loading="lazy"
                      className="h-40 w-64 shrink-0 rounded-sm object-cover lg:h-44 lg:w-full"
                    />
                  ))}
                </div>
              </section>
            );
          })}

          <Reveal className="border-t border-zenova-ink/10 pt-16 text-center">
            <h2 className="mb-4 text-3xl tracking-[0.02em] text-zenova-ink">
              {vi ? "Chọn phòng phù hợp với bạn" : "Find the cabin that fits you"}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zenova-stone/85">
              {vi
                ? "Để lại thông tin, đội ngũ Zenova sẽ tư vấn hạng phòng và báo giá trong 24 giờ."
                : "Leave your details and our team will advise on cabins and pricing within 24 hours."}
            </p>
            <Button
              asChild
              className="btn-sheen rounded-none bg-zenova-gold px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-zenova-ink hover:bg-zenova-gold/90"
            >
              <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                {t.nav.quote}
              </a>
            </Button>
          </Reveal>
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}
