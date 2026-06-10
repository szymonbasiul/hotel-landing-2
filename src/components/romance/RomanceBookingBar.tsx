"use client";

import { motion } from "framer-motion";
import { romancePackage } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

export default function RomanceBookingBar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="sticky top-0 z-50 border-b border-gold-pale/30 bg-beige-light/90 shadow-gold-sm backdrop-blur-xl"
          aria-label="Booking information bar"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 lg:px-12">
            <div className="flex items-center gap-8">
              <span className="font-serif text-lg text-black">
                {romancePackage.name}
              </span>
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-black-charcoal/60">
                <span className="relative">
                  {t.bookingBar.nights}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px bg-gold/40"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
                <span className="h-3 w-px bg-gold-pale/40" />
                <span>{t.bookingBar.dinner}</span>
                <span className="h-3 w-px bg-gold-pale/40" />
                <span>{t.bookingBar.spa}</span>
                <span className="h-3 w-px bg-gold-pale/40" />
                <span>{t.bookingBar.breakfast}</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-serif text-sm text-crimson/80">
                {romancePackage.priceLabel}
              </span>
              <a
                href="#booking"
                className="group relative overflow-hidden rounded-full bg-crimson px-6 py-2.5 font-sans text-xs font-medium tracking-wider text-beige transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={t.bookingBar.book}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{t.bookingBar.book}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-pale/30 bg-beige-light/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="font-serif text-sm text-black">
              {romancePackage.nameShort}
            </p>
            <p className="text-xs text-black-charcoal/60">
              {romancePackage.priceLabel}
            </p>
          </div>
          <a
            href="#booking"
            className="rounded-full bg-crimson px-6 py-2.5 font-sans text-xs font-medium tracking-wider text-beige transition-all duration-300 hover:bg-crimson-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={t.bookingBar.book}
          >
            {t.bookingBar.book}
          </a>
        </div>
      </div>
    </>
  );
}
