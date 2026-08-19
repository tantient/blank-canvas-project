import { ZenovaLogo } from "./ZenovaLogo";

interface FooterProps {
  t: {
    footer: { rights: string; tagline: string; contact: string[] };
  };
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-zenova-gold/20 bg-zenova-ivory py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          <ZenovaLogo
            variant="stacked"
            showTagline={false}
            className="h-24 text-[15px] text-zenova-ink/90"
            aria-label="Zenova Cruise"
          />
          <p className="text-[11px] uppercase tracking-[0.32em] text-zenova-stone/80">
            {t.footer.tagline}
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-zenova-stone/85 sm:flex-row sm:gap-6">
            {t.footer.contact.map((item) => (
              <span key={item} className="tracking-wide">
                {item}
              </span>
            ))}
          </div>

          <div className="h-px w-24 bg-zenova-gold/40" />
          <p className="text-xs tracking-wide text-zenova-stone/70">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
