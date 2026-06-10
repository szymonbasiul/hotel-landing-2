"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroAssets } from "@/src/data/romanceAssets";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

const easing = [0.25, 0.1, 0.25, 1] as const;

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay: i * 0.2 },
  }),
};

const letterEasing = [0.25, 0.1, 0.25, 1] as const;

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.03,
      ease: letterEasing,
    },
  }),
};

const shimmerTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "linear" as const,
};

export default function RomanceHero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.4]);

  const headlineWords = t.hero.headline.split(/(\s+)/);

  return (
    <section
      ref={ref}
      className="relative min-h-dvh overflow-hidden bg-black"
      aria-label="Hero section"
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1440px] flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center px-6 py-16 pt-28 md:w-1/2 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-lg">
            <motion.span
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-gold-pale/60"
            >
              {t.hero.eyebrow}
            </motion.span>

            <motion.h1
              className="mb-6 overflow-hidden font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              aria-label={t.hero.headline}
            >
              <span className="inline leading-normal">
                {headlineWords.map((word, i) =>
                  word === " " ? (
                    <span key={i} className="inline">&nbsp;</span>
                  ) : (
                    <motion.span
                      key={i}
                      custom={i + 5}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block whitespace-nowrap"
                      style={{
                        background:
                          "linear-gradient(135deg, #f5e6c8, #d4af37, #f5e6c8)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {word}
                    </motion.span>
                  )
                )}
              </span>
            </motion.h1>

            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-md font-sans text-base leading-relaxed text-beige/60 sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#booking"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crimson px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-beige transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={t.hero.ctaPrimary}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
                  initial={{ backgroundPosition: "200% center" }}
                  animate={{ backgroundPosition: "-200% center" }}
                  transition={shimmerTransition}
                />
                <span className="relative z-10">{t.hero.ctaPrimary}</span>
              </a>
              <a
                href="#included"
                className="inline-flex items-center justify-center rounded-full border border-gold/25 px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-beige/70 transition-all duration-300 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
              <span className="inline-block rounded-full border border-gold/15 px-4 py-2 font-sans text-xs tracking-wide text-gold/50">
                {t.hero.priceLabel}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="relative h-[50vh] overflow-hidden md:h-auto md:w-1/2">
          <motion.div
            className="absolute inset-0"
            style={{ scale: videoScale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={heroAssets.heroVideoFallback}
              className="h-full w-full object-cover"
              aria-hidden="true"
            >
              <source src={heroAssets.heroVideo} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-transparent"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 ring-1 ring-gold/5 ring-inset" />
        </div>
      </div>
    </section>
  );
}
