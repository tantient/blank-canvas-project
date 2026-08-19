"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ZenovaLogo } from "./ZenovaLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Lang } from "./translations";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: {
    nav: { about: string; gallery: string; cabins: string; quote: string };
  };
}

const QUOTE_LINK = "https://zalo.me/";

export function Header({ lang, setLang, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/cabins", label: t.nav.cabins },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zenova-ivory/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <ZenovaLogo
            showTagline={false}
            className={`h-9 text-[15px] transition-colors ${
              scrolled ? "text-zenova-ink" : "text-zenova-ivory"
            }`}
            aria-label="Zenova Cruise"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                scrolled
                  ? "text-zenova-ink/80 hover:text-zenova-ink"
                  : "text-zenova-ivory/90 hover:text-zenova-ivory"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className={`flex items-center rounded-full border p-1 ${scrolled ? "border-zenova-ink/10" : "border-zenova-ivory/30"}`}>
            <button
              onClick={() => setLang("vi")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "vi"
                  ? "bg-zenova-ink text-zenova-ivory"
                  : scrolled
                    ? "text-zenova-ink/70 hover:text-zenova-ink"
                    : "text-zenova-ivory/80 hover:text-zenova-ivory"
              }`}
              aria-label="Tiếng Việt"
            >
              VI
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "en"
                  ? "bg-zenova-ink text-zenova-ivory"
                  : scrolled
                    ? "text-zenova-ink/70 hover:text-zenova-ink"
                    : "text-zenova-ivory/80 hover:text-zenova-ivory"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <ThemeToggle
            className={
              scrolled
                ? "border-zenova-ink/15 text-zenova-ink hover:bg-zenova-ink/5"
                : "border-zenova-ivory/30 text-zenova-ivory hover:bg-zenova-ivory/10"
            }
          />

          <Button asChild className="btn-sheen rounded-none bg-zenova-gold text-[11px] font-semibold uppercase tracking-[0.18em] text-zenova-ink hover:bg-zenova-gold/90">
            <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
              {t.nav.quote}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-zenova-ink" : "text-zenova-ivory"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-zenova-ink" : "text-zenova-ivory"}`} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zenova-ink/10 bg-zenova-ivory px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-zenova-ink/80"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLang("vi")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  lang === "vi" ? "bg-zenova-ink text-zenova-ivory" : "text-zenova-ink/70"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  lang === "en" ? "bg-zenova-ink text-zenova-ivory" : "text-zenova-ink/70"
                }`}
              >
                EN
              </button>
              <ThemeToggle className="border-zenova-ink/15 text-zenova-ink hover:bg-zenova-ink/5" />
            </div>
            <Button asChild className="btn-sheen rounded-none bg-zenova-gold text-[11px] font-semibold uppercase tracking-[0.18em] text-zenova-ink hover:bg-zenova-gold/90">
              <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                {t.nav.quote}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
