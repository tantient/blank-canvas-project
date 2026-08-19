"use client";

import { Link } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useLanguage } from "@/components/landing/use-language";
import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";
import {
  cabinTypes,
  TOTAL_CABINS,
  AREA_LABEL_VI,
  AREA_LABEL_EN,
  AREA_NOTE_VI,
  AREA_NOTE_EN,
} from "./cabins-data";

const QUOTE_LINK = "https://zalo.me/";

export function CabinsPage() {
  const { lang, setLang, t } = useLanguage();
  const vi = lang === "vi";
  const vipCabins = cabinTypes.filter((c) => c.vip);

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
              {vi ? `Các hạng phòng, ${TOTAL_CABINS} lựa chọn` : `Cabin categories, ${TOTAL_CABINS} cabins`}
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
                    {cabin.code ? (
                      <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-zenova-gold">
                        {cabin.code}
                      </p>
                    ) : null}
                    <h3 className="mb-3 text-2xl tracking-[0.02em] text-card-foreground">
                      {vi ? cabin.nameVi : cabin.nameEn}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-zenova-stone/85">
                      {vi ? cabin.descVi : cabin.descEn}
                    </p>

                    <dl className="mb-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-zenova-ink/10 py-5">
                      <Spec
                        label={
                          cabin.vip
                            ? vi
                              ? AREA_LABEL_VI
                              : AREA_LABEL_EN
                            : vi
                              ? "Diện tích"
                              : "Area"
                        }
                        value={
                          cabin.vip
                            ? vi
                              ? `${cabin.area} tổng diện tích riêng`
                              : `${cabin.area} Total Private Area`
                            : cabin.area
                        }
                      />
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

                    {cabin.vip ? (
                      <p className="-mt-3 mb-6 text-xs leading-relaxed text-zenova-stone/70">
                        {vi ? AREA_NOTE_VI : AREA_NOTE_EN}
                      </p>
                    ) : null}

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


          <Reveal className="mt-16">
            <p className="eyebrow mb-5 text-zenova-gold">{vi ? "BẢNG SO SÁNH SUITE" : "SUITE COMPARISON"}</p>
            <div className="relative overflow-x-auto rounded-sm border border-zenova-ink/10">
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-gradient-to-l from-zenova-ink/8 to-transparent sm:w-10" />
              <table className="w-full min-w-[520px] border-collapse text-left text-xs sm:min-w-[640px] sm:text-sm">
                <thead>
                  <tr className="bg-zenova-ink/[0.04] text-[10px] uppercase tracking-[0.2em] text-zenova-stone/70">
                    <th className="sticky left-0 z-10 bg-zenova-ink/[0.04] px-3 py-3 font-medium shadow-[2px_0_6px_-2px_rgba(0,0,0,0.08)] sm:px-5 sm:py-4">
                      {vi ? "Hạng phòng" : "Cabin type"}
                    </th>
                    <th className="px-3 py-3 font-medium sm:px-5 sm:py-4">{vi ? AREA_LABEL_VI : AREA_LABEL_EN}</th>
                    <th className="px-3 py-3 font-medium sm:px-5 sm:py-4">{vi ? "Giường" : "Bed"}</th>
                    <th className="px-3 py-3 font-medium sm:px-5 sm:py-4">{vi ? "Sân riêng" : "Private terrace"}</th>
                    <th className="px-3 py-3 font-medium sm:px-5 sm:py-4">{vi ? "Hồ sục ngoài trời" : "Outdoor whirlpool"}</th>
                  </tr>
                </thead>
                <tbody>
                  {vipCabins.map((c) => (
                    <tr key={c.id} className="border-t border-zenova-ink/10 text-zenova-ink">
                      <td className="sticky left-0 z-10 bg-zenova-ivory px-3 py-3 shadow-[2px_0_6px_-2px_rgba(0,0,0,0.08)] sm:px-5 sm:py-4">
                        {c.code}
                      </td>
                      <td className="px-3 py-3 sm:px-5 sm:py-4">{c.area}</td>
                      <td className="px-3 py-3 sm:px-5 sm:py-4">King</td>
                      <td className="px-3 py-3 sm:px-5 sm:py-4">{vi ? "Có" : "Included"}</td>
                      <td className="px-3 py-3 sm:px-5 sm:py-4">{vi ? "Có" : "Included"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zenova-stone/70">
              {vi ? AREA_NOTE_VI : AREA_NOTE_EN}
            </p>
          </Reveal>

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
