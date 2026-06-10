"use client";

import { motion } from "framer-motion";
import { giftSection } from "@/src/data/romancePackage";
import { storyAssets } from "@/src/data/romanceAssets";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function GiftExperience() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="bg-beige-pale px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-black-charcoal/50">
              {t.gift.eyebrow}
            </span>
            <h2 className="mb-6 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              {t.gift.headline}
            </h2>
            <p className="mb-8 max-w-md font-sans text-base leading-relaxed text-black-charcoal/60">
              {t.gift.text}
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 space-y-3"
            >
              {giftSection.addons.map((addon) => (
                <motion.li
                  key={addon}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs text-gold transition-all duration-300 group-hover:bg-gold/20">
                    +
                  </span>
                  <span className="font-sans text-sm text-black/70 transition-colors duration-300 group-hover:text-gold-dark">
                    {addon}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <a
              href="#booking"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-beige transition-all duration-300 hover:bg-black-charcoal hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={t.gift.cta}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/8 to-transparent bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["200% center", "-200% center"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">{t.gift.cta}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={storyAssets.coupleEmbrace}
              alt="Romantic gift experience"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
