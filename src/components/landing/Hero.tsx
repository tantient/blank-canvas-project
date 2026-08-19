import { Button } from "@/components/ui/button";
import { HeroMedia, type HeroSlide } from "./HeroMedia";
import { Reveal } from "./Reveal";
import slide1 from "@/assets/zenova-slide-1.jpg.asset.json";
import slide2 from "@/assets/zenova-slide-2.jpg.asset.json";
import slide3 from "@/assets/zenova-slide-3.jpg.asset.json";
import slide4 from "@/assets/zenova-slide-4.jpg.asset.json";

interface HeroProps {
  t: {
    hero: {
      tagline: string;
      title: string;
      subtitle: string;
      cta: string;
      scroll: string;
    };
  };
}

const QUOTE_LINK = "https://zalo.me/";

const SLIDES: HeroSlide[] = [
  { url: slide1.url, alt: "Zenova Cruise trên vịnh Hạ Long lúc hoàng hôn" },
  { url: slide2.url, alt: "Toàn cảnh du thuyền Zenova Cruise giữa vịnh" },
  { url: slide3.url, alt: "Zenova Cruise nhìn từ trên cao" },
  { url: slide4.url, alt: "Sảnh đón khách và hồ bơi vô cực trên tàu" },
];

export function Hero({ t }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <HeroMedia slides={SLIDES} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zenova-ink/70 via-zenova-ink/15 to-zenova-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-zenova-ivory">
          <Reveal immediate delay={100}>
            <p className="eyebrow mb-6 text-zenova-gold">{t.hero.tagline}</p>
          </Reveal>
          <Reveal immediate delay={260}>
            <h1 className="mb-6 text-5xl leading-[1.02] tracking-[0.06em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal immediate delay={420}>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-zenova-ivory/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal immediate delay={580}>
            <Button
              asChild
              size="lg"
              className="btn-sheen rounded-none bg-zenova-gold px-8 text-xs font-semibold uppercase tracking-[0.2em] text-zenova-ink hover:bg-zenova-gold/90"
            >
              <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                {t.hero.cta}
              </a>
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-zenova-ivory/60 lg:flex lg:right-8">
        <span>{t.hero.scroll}</span>
        <span className="h-10 w-px bg-gradient-to-b from-zenova-ivory/60 to-transparent" />
      </div>
    </section>
  );
}
