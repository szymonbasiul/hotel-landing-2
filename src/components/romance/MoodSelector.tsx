"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { moods } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations, moodItemTranslations } from "@/src/i18n/translations";

const buttonVariants = {
  inactive: { borderColor: "rgba(212,175,55,0.25)", color: "rgba(245,230,200,0.6)" },
  active: { borderColor: "rgba(212,175,55,0.8)", color: "rgba(245,230,200,1)" },
};

export default function MoodSelector() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const items = moodItemTranslations[lang];
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="bg-black-warm px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-gold-pale/40">
            {t.mood.eyebrow}
          </span>
          <h2 className="font-serif text-3xl text-gold-pale sm:text-4xl lg:text-5xl">
            {t.mood.title}
          </h2>
          <motion.div
            className="mx-auto mt-4 h-px max-w-[80px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => setActive(i)}
              aria-label={`Select ${item.label}`}
              aria-pressed={active === i}
              variants={buttonVariants}
              initial="inactive"
              animate={active === i ? "active" : "inactive"}
              whileHover={{
                borderColor: "rgba(212,175,55,0.6)",
                transition: { duration: 0.2 },
              }}
              className="rounded-full border bg-gold/5 px-6 py-2.5 font-sans text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                backgroundColor: active === i ? "rgba(212,175,55,0.12)" : "",
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 25, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, y: -25, clipPath: "inset(100% 0 0 0)" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={moods[active].image}
                alt={current.label}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-warm/50 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div>
              <motion.h3
                key={`title-${active}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-3 font-serif text-2xl text-gold-pale sm:text-3xl"
              >
                {current.label}
              </motion.h3>
              <motion.p
                key={`desc-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-4 font-sans text-base leading-relaxed text-gold-pale/60"
              >
                {current.description}
              </motion.p>
              <motion.p
                key={`rec-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-8 font-sans text-sm italic text-gold-pale/40"
              >
                {current.recommendation}
              </motion.p>
              <motion.a
                key={`cta-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                href="#booking"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-crimson px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-beige transition-all duration-300 hover:shadow-[0_0_25px_rgba(220,20,60,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={current.cta}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["200% center", "-200% center"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{current.cta}</span>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
