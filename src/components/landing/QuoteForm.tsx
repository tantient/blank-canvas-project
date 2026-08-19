"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Reveal } from "./Reveal";

interface QuoteFormProps {
  t: {
    form: {
      label: string;
      title: string;
      subtitle: string;
      name: string;
      phone: string;
      email: string;
      date: string;
      message: string;
      submit: string;
      success: string;
    };
  };
}

export function QuoteForm({ t }: QuoteFormProps) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.form.success);
    setValues({ name: "", phone: "", email: "", date: "", message: "" });
  };

  return (
    <section id="quote" className="relative bg-zenova-ink">
      {/* Chuyển tông mềm từ khối sáng phía trên xuống nền navy */}
      <div
        aria-hidden
        className="h-20 w-full bg-gradient-to-b from-zenova-ivory to-zenova-ink lg:h-28"
      />
      <div className="mx-auto max-w-3xl px-6 pb-4 lg:px-8">
        <Reveal className="mb-10 text-center text-zenova-ivory">
          <p className="eyebrow mb-5 justify-center text-zenova-gold">{t.form.label}</p>
          <h2 className="mb-3 text-4xl tracking-[0.02em] sm:text-5xl">{t.form.title}</h2>
          <p className="text-zenova-ivory/70">{t.form.subtitle}</p>
        </Reveal>

        <Reveal
          as="form"
          onSubmit={handleSubmit}
          className="mx-auto w-full border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-10"
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/60">
                {t.form.name}
              </Label>
              <Input
                id="name"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                required
                className="field-underline border-white/20 text-zenova-ivory transition-colors placeholder:text-zenova-ivory/40 focus:border-zenova-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/60">
                {t.form.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                required
                className="field-underline border-white/20 text-zenova-ivory transition-colors placeholder:text-zenova-ivory/40 focus:border-zenova-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/60">
                {t.form.email}
              </Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className="field-underline border-white/20 text-zenova-ivory transition-colors placeholder:text-zenova-ivory/40 focus:border-zenova-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/60">
                {t.form.date}
              </Label>
              <Input
                id="date"
                type="date"
                value={values.date}
                onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
                className="field-underline border-white/20 text-zenova-ivory transition-colors placeholder:text-zenova-ivory/40 focus:border-zenova-gold"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.24em] text-zenova-ivory/60">
                {t.form.message}
              </Label>
              <Textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className="field-underline border-white/20 text-zenova-ivory transition-colors placeholder:text-zenova-ivory/40 focus:border-zenova-gold"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="btn-sheen mt-12 w-full rounded-none bg-zenova-gold text-xs font-semibold uppercase tracking-[0.2em] text-zenova-ink hover:bg-zenova-gold/90"
            size="lg"
          >
            {t.form.submit}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
