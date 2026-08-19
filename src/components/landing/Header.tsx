"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ZenovaLogo } from "./ZenovaLogo";
import { services } from "@/components/services/services-data";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Lang } from "@/lib/translations";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: {
    nav: { about: string; cabins: string; gallery: string; services: string; itineraries: string; offers: string; quote: string; book: string };
  };
}

const BOOKING_LINK = "https://zalo.me/";

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
    { href: "/itineraries", label: t.nav.itineraries },
    { href: "/cabins", label: t.nav.cabins },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/offers", label: t.nav.offers },
    { href: "/about", label: t.nav.about },
  ];

  const serviceLinks = services.map((s) => ({
    href: `/services/${s.id}`,
    label: lang === "vi" ? s.nameVi : s.nameEn,
  }));

  const linkClasses = scrolled
    ? "text-zenova-ink/80 hover:text-zenova-ink"
    : "text-zenova-ivory/90 hover:text-zenova-ivory";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zenova-ivory/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <ZenovaLogo
            showTagline={false}
            className={`h-9 text-[15px] transition-colors ${
              scrolled ? "text-zenova-ink" : "text-zenova-ivory"
            }`}
            aria-label="Zenova Cruise"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/itineraries"
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
          >
            {t.nav.itineraries}
          </Link>
          <Link
            to="/cabins"
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
          >
            {t.nav.cabins}
          </Link>

          <div className="group relative">
            <button
              className={`flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
            >
              {t.nav.services}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-sm border border-zenova-ink/10 bg-zenova-ivory py-2 shadow-lg">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-5 py-2.5 text-[12px] tracking-wide text-zenova-ink/80 transition-colors hover:bg-zenova-ink/5 hover:text-zenova-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
          >
            {t.nav.gallery}
          </Link>
          <Link
            to="/offers"
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
          >
            {t.nav.offers}
          </Link>
          <Link
            to="/about"
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${linkClasses}`}
          >
            {t.nav.about}
          </Link>
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
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              {t.nav.book}
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
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-zenova-ink/80"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-1">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zenova-ink/50">
                {t.nav.services}
              </p>
              <div className="flex flex-col gap-3 border-l border-zenova-ink/10 pl-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-wide text-zenova-ink/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
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
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
                {t.nav.book}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
