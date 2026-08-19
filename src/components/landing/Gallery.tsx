import gallerySuite from "@/assets/zenova-gallery-suite.jpg.asset.json";
import galleryDining from "@/assets/zenova-gallery-dining.jpg.asset.json";
import gallerySundeck from "@/assets/zenova-gallery-sundeck.jpg.asset.json";

import { Reveal } from "./Reveal";

interface GalleryProps {
  t: {
    gallery: {
      label: string;
      title: string;
      subtitle: string;
      captions: string[];
    };
  };
}

const images = [
  { src: gallerySuite.url, alt: "Luxury ocean-view suite on Zenova Cruise" },
  { src: galleryDining.url, alt: "Fine dining restaurant aboard Zenova Cruise" },
  { src: gallerySundeck.url, alt: "Sundeck and pool on Zenova Cruise" },
];

export function Gallery({ t }: GalleryProps) {
  const main = images[0]!;
  const side = [images[1]!, images[2]!];

  return (
    <section id="gallery" className="bg-zenova-ivory pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-6 text-zenova-gold">{t.gallery.label}</p>
          <h2 className="mb-4 text-4xl tracking-[0.02em] text-zenova-ink sm:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="text-zenova-stone/85">{t.gallery.subtitle}</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <GalleryCard src={main.src} alt={main.alt} caption={t.gallery.captions[0]} />
          </Reveal>
          <div className="grid gap-5">
            {side.map((img, i) => (
              <Reveal key={img.alt} delay={140 * (i + 1)}>
                <GalleryCard src={img.src} alt={img.alt} caption={t.gallery.captions[i + 1]} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string | undefined;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-sm bg-zenova-ink/5">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[16/10] h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {caption ? (
        <p className="pointer-events-none absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.28em] text-zenova-ivory opacity-0 transition-all duration-700 group-hover:opacity-100">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
