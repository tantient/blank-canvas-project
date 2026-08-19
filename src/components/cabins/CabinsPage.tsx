"use client";

import { Link } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useLanguage } from "@/components/landing/use-language";
import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";
import { cabinTypes, TOTAL_CABINS } from "./cabins-data";

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
              <p className="eyebrow mb-5 text-zenova-gold">{vi ? "PHÒNG NGHỈ" : "CABINS"}</p>
              <h1 className="max-w-3xl text-4xl tracking-[0.02em] text-zenova-ivory sm:text-5xl">
                {vi ? "Giấc ngủ giữa lòng vịnh" : "Sleep in the heart of the bay"}
              </h1>
              <p className="mt-4 max-w-xl text-zenova-ivory/85">
                {vi
                  ? `${TOTAL_CABINS} phòng nghỉ hướng biển, mỗi hạng phòng là một cách cảm nhận khác nhau về Hạ Long.`
                  : `${TOTAL_CABINS} sea-facing cabins, each category offering its own way of experiencing Ha Long.`}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5 text-zenova-gold">{vi ? "HẠNG PHÒNG" : "CABIN CATEGORIES"}</p>
            <h2 className="mb-4 text-3xl tracking-[0.02em] text-zenova-ink sm:text-4xl">
              {vi ? `Bốn hạng phòng, ${TOTAL_CABINS} lựa chọn` : `Four categories, ${TOTAL_CABINS} cabins`}
            </h2>
            <p className="text-zenova-stone/85">
              {vi
                ? "Tất cả các phòng đều hướng biển, sử dụng 1 giường đôi hoặc 2 giường đơn tuỳ yêu cầu của khách."
                : "Every cabin faces the sea and can be arranged with one double bed or two twin beds on request."}
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {cabinTypes.map((cabin, index) => (
              <Reveal key={cabin.id} delay={80 * index}>
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-zenova-ink/10 bg-card">
                  <Link
                    to="/cabins/$cabinId"
                    params={{ cabinId: cabin.id }}
                    className="group block overflow-hidden"
                  >
                    <img
                      src={cabin.hero}
                      alt={vi ? cabin.nameVi : cabin.nameEn}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="mb-3 text-2xl tracking-[0.02em] text-card-foreground">
                      {vi ? cabin.nameVi : cabin.nameEn}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-zenova-stone/85">
                      {vi ? cabin.descVi : cabin.descEn}
                    </p>

                    <dl className="mb-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-zenova-ink/10 py-5">
                      <Spec label={vi ? "Diện tích" : "Area"} value={cabin.area} />
                      <Spec
                        label={vi ? "Số phòng" : "Cabins"}
                        value={
                          vi ? `${cabin.roomCount} phòng` : `${cabin.roomCount} cabins`
                        }
                      />
                      <Spec
                        label={vi ? "Giường" : "Bed"}
                        value={vi ? cabin.bedVi : cabin.bedEn}
                        wide
                      />
                      <Spec
                        label={vi ? "Sức chứa tối đa" : "Max occupancy"}
                        value={
                          vi ? `${cabin.maxGuests} khách` : `${cabin.maxGuests} guests`
                        }
                        wide
                      />
                    </dl>

                    <div className="mt-auto flex flex-wrap items-center gap-5">
                      <Button
                        asChild
                        className="btn-sheen rounded-none bg-zenova-gold px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-zenova-ink hover:bg-zenova-gold/90"
                      >
                        <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                          {vi ? "Liên hệ báo giá" : "Request a quote"}
                        </a>
                      </Button>
                      <Link
                        to="/cabins/$cabinId"
                        params={{ cabinId: cabin.id }}
                        className="border-b border-zenova-gold pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-card-foreground hover:text-zenova-gold"
                      >
                        {vi ? "Xem chi tiết" : "View details"}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 rounded-sm border border-zenova-gold/30 bg-zenova-gold/5 p-6">
            <p className="text-sm leading-relaxed text-zenova-stone/85">
              {vi
                ? "Junior Suite loại A và loại B có sức chứa khác nhau. Số khách tối đa của từng phòng cụ thể sẽ được xác nhận khi bạn chọn phòng, không áp dụng chung một con số cho cả nhóm Junior Suite."
                : "Junior Suite type A and type B have different maximum occupancies. The exact figure is confirmed per individual cabin at the time of selection rather than applied to the Junior Suite group as a whole."}
            </p>
          </Reveal>

          <Reveal className="mt-24 border-t border-zenova-ink/10 pt-16 text-center">
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
                {vi ? "Liên hệ báo giá" : "Request a quote"}
              </a>
            </Button>
          </Reveal>
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}

function Spec({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "col-span-2 sm:col-span-1" : ""}>
      <dt className="text-[10px] uppercase tracking-[0.24em] text-zenova-stone/70">{label}</dt>
      <dd className="mt-1 text-sm text-card-foreground">{value}</dd>
    </div>
  );
}
