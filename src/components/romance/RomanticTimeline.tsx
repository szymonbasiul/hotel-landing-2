"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations, timelineTranslations } from "@/src/i18n/translations";

function TimelineStage({
  stage,
  tStage,
  index,
}: {
  stage: (typeof timeline.stages)[0];
  tStage: { phase: string; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, rotateY: 10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative flex items-start gap-6 pb-16 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-beige-light text-xs font-medium text-black shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          whileHover={{ scale: 1.1, borderColor: "rgba(212,175,55,0.8)" }}
        >
          {index + 1}
        </motion.div>
        {index < timeline.stages.length - 1 && (
          <div className="h-full w-px bg-gradient-to-b from-gold/30 to-transparent" />
        )}
      </div>

      <div className="flex-1">
        <span className="mb-1 block font-sans text-xs uppercase tracking-[0.2em] text-black-charcoal/50">
          {tStage.phase}
        </span>
        <h3 className="mb-2 font-serif text-xl text-black sm:text-2xl">
          {tStage.title}
        </h3>
        <p className="max-w-md font-sans text-sm leading-relaxed text-black-charcoal/60">
          {tStage.description}
        </p>
      </div>

      {stage.image && (
        <motion.div
          className="hidden w-32 shrink-0 overflow-hidden rounded-sm md:block lg:w-40"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={stage.image}
            alt={tStage.title}
            className="h-24 w-full object-cover lg:h-32"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function RomanticTimeline() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const tStages = timelineTranslations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section className="bg-beige-gradient px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-black-charcoal/50">
            {t.timeline.eyebrow}
          </span>
          <h2 className="font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
            {t.timeline.title}
          </h2>
        </motion.div>

        <div ref={ref} className="relative mx-auto max-w-2xl">
          <div className="absolute left-5 top-0 h-full w-px bg-beige-dark/50" />
          <motion.div
            className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-gold via-gold/80 to-crimson/60"
            style={{ height: progressHeight, opacity: progressOpacity }}
          />

          <div className="relative">
            {timeline.stages.map((stage, index) => (
              <TimelineStage
                key={stage.phase}
                stage={stage}
                tStage={tStages[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
