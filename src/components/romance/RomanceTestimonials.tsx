"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

const quoteEasing = [0.25, 0.1, 0.25, 1] as const;

const quoteVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: quoteEasing,
    },
  }),
};

export default function RomanceTestimonials() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="bg-beige-pale px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-black-charcoal/50">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              custom={index}
              variants={quoteVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative border border-beige-dark/60 bg-beige p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-gold-md"
            >
              <motion.span
                className="mb-4 block font-serif text-5xl leading-none text-gold/30"
                aria-hidden="true"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                &ldquo;
              </motion.span>
              <p className="mb-6 font-serif text-lg leading-relaxed text-black">
                {item.quote}
              </p>
              <footer className="font-sans text-xs tracking-wider text-black-charcoal/50">
                {item.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-beige-dark/50 pt-8 text-center"
        >
          <p className="font-sans text-sm tracking-wide text-black-charcoal/50">
            {t.testimonials.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
