import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

import { ZenovaLogo } from "./ZenovaLogo";

interface FooterProps {
  t: {
    footer: { rights: string; tagline: string; contact: string[] };
    nav: {
      about: string;
      careers: string;
      itineraries: string;
      cabins: string;
      services: string;
      gallery: string;
      offers: string;
      contact: string;
    };
  };
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Zalo", href: "https://zalo.me/", Icon: MessageCircle },
];

export function Footer({ t }: FooterProps) {
  const quickLinks = [
    { label: t.nav.about, to: "/about" as const },
    { label: t.nav.careers, to: "/careers" as const },
    { label: t.nav.itineraries, to: "/itineraries" as const },
    { label: t.nav.cabins, to: "/cabins" as const },
    { label: t.nav.services, to: "/services/$serviceId" as const, params: { serviceId: "dining" } },
    { label: t.nav.gallery, to: "/gallery" as const },
    { label: t.nav.offers, to: "/offers" as const },
    { label: t.nav.contact, to: "/contact" as const },
  ];

  return (
    <footer className="border-t border-zenova-gold/20 bg-zenova-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          {/* Brand + tagline */}
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <ZenovaLogo
              variant="stacked"
              showTagline={false}
              className="h-20 text-[14px] text-zenova-ink/90"
              aria-label="Zenova Cruise"
            />
            <p className="text-[11px] uppercase tracking-[0.32em] text-zenova-stone/80">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <p className="mb-1 text-[11px] uppercase tracking-[0.28em] text-zenova-stone/60">
              Zenova
            </p>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                {...(link.params ? { params: link.params } : {})}
                className="text-sm tracking-wide text-zenova-stone/85 transition-colors hover:text-zenova-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact + socials */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <p className="mb-1 text-[11px] uppercase tracking-[0.28em] text-zenova-stone/60">
              {t.nav.contact}
            </p>
            {t.footer.contact.map((item) => (
              <span key={item} className="text-sm tracking-wide text-zenova-stone/85">
                {item}
              </span>
            ))}
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zenova-gold/30 text-zenova-stone/80 transition-colors hover:border-zenova-gold hover:text-zenova-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zenova-gold/15 pt-6 text-center">
          <p className="text-xs tracking-wide text-zenova-stone/70">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
