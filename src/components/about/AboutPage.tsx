import { Anchor, ChefHat, ConciergeBell, Waves, type LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";

interface AboutProps {
  t: {
    about: {
      label: string;
      title: string;
      body: string;
      features: { title: string; desc: string }[];
    };
  };
}

const icons: LucideIcon[] = [Waves, ChefHat, ConciergeBell, Anchor];

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="relative bg-zenova-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-6 text-zenova-gold">{t.about.label}</p>
            <h2 className="mb-7 text-4xl leading-[1.1] tracking-[0.02em] text-zenova-ink sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="max-w-xl text-base leading-[1.9] text-zenova-stone/90">
              {t.about.body}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.about.features.map((feature, idx) => {
              const Icon = icons[idx % icons.length]!;
              return (
                <Reveal key={feature.title} delay={120 * idx}>
                  <div className="group h-full border border-zenova-ink/10 bg-zenova-warm/25 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-zenova-gold/60 hover:bg-zenova-ivory">
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-zenova-gold/50 transition-colors duration-500 group-hover:border-zenova-gold">
                      <Icon className="h-5 w-5 text-zenova-gold" strokeWidth={1.25} />
                    </span>
                    <h3 className="mb-2 text-xl tracking-[0.02em] text-zenova-ink">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zenova-stone/80">
                      {feature.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-28 h-px max-w-7xl bg-gradient-to-r from-transparent via-zenova-gold/45 to-transparent" />
    </section>
  );
}
