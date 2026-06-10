"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/i18n/translations";

const linkEasing = [0.25, 0.1, 0.25, 1] as const;

const linkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: linkEasing },
  }),
};

const mobileItem = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

const navLinks = [
  { key: "home", href: "#" },
  { key: "package", href: "#included" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#booking" },
] as const;

export default function Navigation() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-black/85 shadow-[0_1px_0_rgba(212,175,55,0.15)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12"
          aria-label="Main navigation"
        >
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative font-serif text-lg tracking-wide text-beige transition-colors hover:text-gold"
            variants={linkVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <span className="text-gold">✦</span>{" "}
            <span className="text-pale-gold">{t.hero.badge}</span>
          </motion.a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                variants={linkVariants}
                custom={i + 1}
                initial="hidden"
                animate="visible"
                className="font-sans text-xs uppercase tracking-[0.2em] text-beige/60 transition-all duration-300 hover:text-gold"
              >
                {t.nav[link.key]}
              </motion.button>
            ))}

            <motion.button
              onClick={toggleLang}
              variants={linkVariants}
              custom={navLinks.length + 1}
              initial="hidden"
              animate="visible"
              className="group relative flex items-center gap-1.5 font-sans text-xs font-medium tracking-wider text-beige/50 transition-all duration-300 hover:text-gold"
              aria-label={`Switch language to ${lang === "en" ? "Polish" : "English"}`}
            >
              <span
                className={`transition-opacity duration-300 ${
                  lang === "en" ? "opacity-100 text-gold" : "opacity-40"
                }`}
              >
                EN
              </span>
              <span className="h-3 w-px bg-beige/20" />
              <span
                className={`transition-opacity duration-300 ${
                  lang === "pl" ? "opacity-100 text-gold" : "opacity-40"
                }`}
              >
                PL
              </span>
            </motion.button>

            <motion.a
              href="#booking"
              variants={linkVariants}
              custom={navLinks.length + 2}
              initial="hidden"
              animate="visible"
              className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 font-sans text-xs font-medium tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-black"
            >
              {t.nav.book}
            </motion.a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-[70] flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 5, width: 20 }
                  : { rotate: 0, y: 0, width: 22 }
              }
              className="h-px rounded-full bg-beige"
              style={{ width: 22 }}
            />
            <motion.span
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="h-px w-4 rounded-full bg-beige/70"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -5, width: 20 }
                  : { rotate: 0, y: 0, width: 16 }
              }
              className="h-px rounded-full bg-beige"
              style={{ width: 16 }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-black/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  variants={mobileItem}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  className="font-sans text-sm uppercase tracking-[0.3em] text-beige/70 transition-colors duration-300 hover:text-gold"
                >
                  {t.nav[link.key]}
                </motion.button>
              ))}

              <motion.div
                variants={mobileItem}
                custom={navLinks.length}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-6 pt-4"
              >
                <button
                  onClick={() => {
                    toggleLang();
                  }}
                  className="group relative flex items-center gap-1.5 font-sans text-xs font-medium tracking-wider text-beige/50 transition-all duration-300 hover:text-gold"
                  aria-label={`Switch language to ${lang === "en" ? "Polish" : "English"}`}
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      lang === "en" ? "opacity-100 text-gold" : "opacity-40"
                    }`}
                  >
                    EN
                  </span>
                  <span className="h-3 w-px bg-beige/20" />
                  <span
                    className={`transition-opacity duration-300 ${
                      lang === "pl" ? "opacity-100 text-gold" : "opacity-40"
                    }`}
                  >
                    PL
                  </span>
                </button>
              </motion.div>

              <motion.a
                href="#booking"
                variants={mobileItem}
                custom={navLinks.length + 1}
                initial="hidden"
                animate="visible"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full border border-gold/40 bg-gold/10 px-8 py-3 font-sans text-sm font-medium tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-black"
              >
                {t.nav.book}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
