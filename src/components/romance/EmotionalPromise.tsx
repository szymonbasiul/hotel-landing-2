"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";
import { storyAssets } from "@/src/data/romanceAssets";

const wordEasing = [0.25, 0.1, 0.25, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.035,
      ease: wordEasing,
    },
  }),
};

export default function EmotionalPromise() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = t.emotional.text.split(" ");

  return (
    <section className="bg-beige-gradient px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <p
              ref={ref}
              className="font-serif text-2xl leading-relaxed text-black sm:text-3xl lg:text-4xl"
            >
              <span className="text-gold">&ldquo;</span>
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <span className="text-gold">&rdquo;</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:col-span-2"
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={storyAssets.candlelightDinner}
                alt="Candlelight dinner detail"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
