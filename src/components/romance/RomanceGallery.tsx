"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/src/data/romancePackage";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

export default function RomanceGallery() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="gallery" className="bg-beige-warm px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 block font-sans text-xs uppercase tracking-[0.25em] text-black-charcoal/50">
            {t.gallery.eyebrow}
          </span>
          <h2 className="font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
          <motion.div
            className="mx-auto mt-4 h-px max-w-[80px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <motion.div
                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={false}
              >
                <div className="w-full p-4">
                  <span className="font-sans text-xs tracking-wider text-gold-pale">
                    {item.caption}
                  </span>
                  <motion.div
                    className="mt-1 h-px w-0 bg-gold/50 transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
