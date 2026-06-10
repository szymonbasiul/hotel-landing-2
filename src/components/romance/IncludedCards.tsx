"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { includedItems } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations, includedTranslations } from "@/src/i18n/translations";

const cardEasing = [0.25, 0.1, 0.25, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: cardEasing,
    },
  }),
};

export default function IncludedCards() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const items = includedTranslations[lang];
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="included"
      className="bg-beige-pale px-6 py-24 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-black-charcoal/50">
            {t.included.eyebrow}
          </span>
          <h2 className="font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
            {t.included.title}
          </h2>
          <motion.div
            className="mx-auto mt-4 h-px max-w-[100px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item, index) => {
            const card = items[index];
            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded(expanded === index ? null : index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === index}
                aria-label={`${card.title} — click for details`}
                className={`group relative cursor-pointer overflow-hidden rounded-sm border transition-all duration-500 ${
                  expanded === index
                    ? "border-gold/40 shadow-gold-md"
                    : "border-beige-dark/50"
                } bg-beige-warm hover:shadow-gold-md`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-serif text-4xl text-gold-pale/80">
                    {item.id}
                  </span>
                  <motion.div
                    className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-gold/10 blur-2xl"
                    animate={{
                      scale: expanded === index ? 3 : 1,
                      opacity: expanded === index ? 0.8 : 0.3,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl text-black">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-black-charcoal/70">
                    {card.description}
                  </p>

                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-beige-dark/50 pt-4">
                          <p className="font-sans text-sm leading-relaxed text-black/70">
                            {card.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-3 flex items-center gap-1.5 text-xs tracking-wider text-crimson/60">
                    <span>
                      {expanded === index
                        ? t.included.showLess
                        : t.included.learnMore}
                    </span>
                    <motion.svg
                      className="h-3 w-3"
                      animate={{ rotate: expanded === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 5L6 8L9 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
