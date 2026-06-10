"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { romancePackage } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";
import { storyAssets } from "@/src/data/romanceAssets";

export default function FinalRomanceCTA() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.3]);

  return (
    <section
      id="booking"
      ref={ref}
      className="relative flex min-h-[85dvh] items-center justify-center overflow-hidden bg-black"
      aria-label="Final booking call to action"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <img
          src={storyAssets.coupleDinner}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"
          style={{ opacity: bgOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/5"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M10 3L10 17M5 8L10 3L15 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold/60"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 font-serif text-4xl leading-tight text-beige sm:text-5xl lg:text-6xl"
        >
          {t.final.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mb-8 font-sans text-base leading-relaxed text-beige/60 sm:text-lg"
        >
          {t.final.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#booking"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crimson px-10 py-4 font-sans text-sm font-medium tracking-wide text-beige transition-all duration-300 hover:shadow-[0_0_35px_rgba(220,20,60,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={t.final.cta}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
              animate={{
                backgroundPosition: ["200% center", "-200% center"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">{t.final.cta}</span>
          </a>
          <span className="font-sans text-xs tracking-wider text-beige/30">
            {romancePackage.priceLabel}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-t border-beige/10 pt-8"
        >
          <nav
            className="flex flex-wrap justify-center gap-8 text-xs tracking-wider text-beige/30"
            aria-label="Footer links"
          >
            <a
              href="#"
              className="transition-all duration-300 hover:text-gold/60"
            >
              {t.footer.contact}
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gold/60"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gold/60"
            >
              {t.footer.terms}
            </a>
            <span className="text-beige/20">
              &copy; {new Date().getFullYear()} Boutique Hotel
            </span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
