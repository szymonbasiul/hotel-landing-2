export type Lang = "en" | "pl";

const en = {
  nav: {
    home: "Home",
    package: "The Experience",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book now",
  },
  hero: {
    eyebrow: "A private escape for two",
    headline: "Make time feel slower, together.",
    subtitle:
      "A romantic stay designed for anniversaries, quiet celebrations and weekends made only for the two of you.",
    ctaPrimary: "Reserve your escape",
    ctaSecondary: "See what's included",
    priceLabel: "From 1 890 PLN / 2 people",
    badge: "Romantic Escape for Two",
  },
  bookingBar: {
    nights: "1 or 2 nights",
    dinner: "Dinner for two",
    spa: "Spa ritual",
    breakfast: "Breakfast in bed",
    book: "Book now",
  },
  emotional: {
    text: "Not every celebration needs a crowd. Some are better remembered in a quiet room, over candlelight, warm water and one unhurried morning.",
  },
  included: {
    eyebrow: "What's included",
    title: "Everything prepared for two",
    showLess: "Show less",
    learnMore: "Learn more",
  },
  mood: {
    eyebrow: "Choose the mood",
    title: "Choose the mood of your escape",
  },
  timeline: {
    eyebrow: "Your journey",
    title: "Your stay, softly planned",
  },
  gift: {
    eyebrow: "Gift experience",
    headline: "Give them a weekend they will remember.",
    text: "The Romantic Escape can be prepared as a gift voucher, with a personalized message and optional add-ons.",
    cta: "Create a gift experience",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Details of romance",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our guests say",
    footer:
      "Designed for anniversaries, proposals, birthdays and quiet weekends together.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
  },
  final: {
    headline: "Some weekends stay with you.",
    subtitle:
      "Reserve a romantic escape designed entirely around the two of you.",
    cta: "Reserve your escape",
  },
  footer: {
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
  },
} as const;

const pl = {
  nav: {
    home: "Strona główna",
    package: "Oferta",
    gallery: "Galeria",
    contact: "Kontakt",
    book: "Rezerwuj",
  },
  hero: {
    eyebrow: "Prywatny wypad we dwoje",
    headline: "Poczujcie, jak czas zwalnia – razem.",
    subtitle:
      "Romantyczny pobyt stworzony z myślą o rocznicach, cichych celebracjach i weekendach tylko dla Was dwojga.",
    ctaPrimary: "Zarezerwuj swój escape",
    ctaSecondary: "Sprawdź, co zawiera",
    priceLabel: "Od 1 890 PLN / 2 osoby",
    badge: "Romantic Escape for Two",
  },
  bookingBar: {
    nights: "1 lub 2 noce",
    dinner: "Kolacja we dwoje",
    spa: "Rytuał SPA",
    breakfast: "Śniadanie do łóżka",
    book: "Rezerwuj",
  },
  emotional: {
    text: "Nie każda celebracja potrzebuje tłumu. Niektóre zapamiętuje się lepiej w cichym pokoju, przy blasku świec, ciepłej wodzie i jednym niespieszonym poranku.",
  },
  included: {
    eyebrow: "Co zawiera pakiet",
    title: "Wszystko przygotowane dla dwojga",
    showLess: "Zwiń",
    learnMore: "Dowiedz się więcej",
  },
  mood: {
    eyebrow: "Wybierz nastrój",
    title: "Wybierz nastrój swojego pobytu",
  },
  timeline: {
    eyebrow: "Wasza podróż",
    title: "Wasz pobyt, zaplanowany z troską",
  },
  gift: {
    eyebrow: "Prezent",
    headline: "Podarujcie weekend, który zapamiętają.",
    text: "Romantic Escape można przygotować jako bon podarunkowy z osobistą wiadomością i dodatkami.",
    cta: "Stwórz doświadczenie prezentowe",
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Detale romantyzmu",
  },
  testimonials: {
    eyebrow: "Opinie",
    title: "Co mówią nasi goście",
    footer:
      "Stworzone dla rocznic, oświadczyn, urodzin i wspólnych weekendów.",
  },
  faq: {
    eyebrow: "Pytania",
    title: "Najczęściej zadawane pytania",
  },
  final: {
    headline: "Niektóre weekendy zostają z Wami na zawsze.",
    subtitle:
      "Zarezerwujcie romantyczny pobyt zaprojektowany w całości dla Was dwojga.",
    cta: "Zarezerwuj swój escape",
  },
  footer: {
    contact: "Kontakt",
    privacy: "Prywatność",
    terms: "Regulamin",
  },
};

export const translations = { en, pl } as const;

export const moodItemTranslations: Record<
  Lang,
  {
    label: string;
    description: string;
    recommendation: string;
    cta: string;
  }[]
> = {
  en: [
    {
      label: "Anniversary",
      description: "For marking another year, beautifully.",
      recommendation:
        "Recommended add-on: bottle of prosecco, flowers, handwritten note",
      cta: "Book anniversary escape",
    },
    {
      label: "Proposal",
      description: "For the moment they will remember.",
      recommendation:
        "Recommended add-on: private dinner setup, flowers, photographer on request",
      cta: "Plan your proposal",
    },
    {
      label: "Quiet Weekend",
      description: "For disappearing from everything, together.",
      recommendation:
        "Recommended add-on: spa extension, late breakfast, room service",
      cta: "Book a quiet weekend",
    },
  ],
  pl: [
    {
      label: "Rocznica",
      description: "Aby pięknie uczcić kolejny rok.",
      recommendation:
        "Rekomendowany dodatek: butelka prosecco, kwiaty, odręczna notka",
      cta: "Zarezerwuj pobyt rocznicowy",
    },
    {
      label: "Oświadczyny",
      description: "Dla momentu, który zapamiętają na zawsze.",
      recommendation:
        "Rekomendowany dodatek: kolacja na zamówienie, kwiaty, fotograf na życzenie",
      cta: "Zaplanuj oświadczyny",
    },
    {
      label: "Cichy Weekend",
      description: "Aby zniknąć ze wszystkiego, razem.",
      recommendation:
        "Rekomendowany dodatek: przedłużone SPA, późne śniadanie, obsługa pokojowa",
      cta: "Zarezerwuj cichy weekend",
    },
  ],
};

export const includedTranslations: Record<
  Lang,
  { title: string; description: string; details: string }[]
> = {
  en: [
    {
      title: "Private Suite",
      description:
        "A beautifully prepared room with romantic details waiting on arrival.",
      details:
        "Your suite will be prepared with fresh flowers, a bottle of chilled water, and soft lighting. The bed is turned down, the curtains drawn — everything ready for an intimate evening.",
    },
    {
      title: "Dinner by Candlelight",
      description:
        "A seasonal dinner for two, served in an intimate evening setting.",
      details:
        "Our chef prepares a multi-course menu built around seasonal ingredients. Candlelight, soft music, and a window table with a view — dinner becomes the evening's centrepiece.",
    },
    {
      title: "Spa Ritual for Two",
      description:
        "A calming treatment designed to slow the body and quiet the mind.",
      details:
        "A private spa session with aromatherapy oils, warm towels, and synchronized treatments. Let the stress of everyday life melt away in a space designed for two.",
    },
    {
      title: "Breakfast in Bed",
      description:
        "A slow morning with breakfast served privately to your room.",
      details:
        "Fresh pastries, seasonal fruit, coffee and juice — delivered to your room at the time you choose. No rush, no restaurant crowds. Just the two of you and a quiet morning.",
    },
    {
      title: "Late Checkout",
      description:
        "Stay a little longer, with no need to rush the goodbye.",
      details:
        "Checkout is extended until 3pm, giving you time for one last walk, a final coffee on the terrace, or simply a few more hours in bed before heading home.",
    },
  ],
  pl: [
    {
      title: "Apartament Prywatny",
      description:
        "Pięknie przygotowany pokój z romantycznymi detalami czekającymi na przyjazd.",
      details:
        "Apartament zostanie przygotowany ze świeżymi kwiatami, butelką schłodzonej wody i miękkim oświetleniem. Łóżko jest odsłonięte, zasłony zaciągnięte — wszystko gotowe na intymny wieczór.",
    },
    {
      title: "Kolacja przy Świecach",
      description:
        "Sezonowa kolacja dla dwojga, podana w intymnej wieczornej atmosferze.",
      details:
        "Nasz szef kuchni przygotowuje wielodaniowe menu oparte na sezonowych składnikach. Świece, delikatna muzyka i stolik przy oknie z widokiem — kolacja staje się centralnym punktem wieczoru.",
    },
    {
      title: "Rytuał SPA dla Dwojga",
      description:
        "Relaksujący zabieg zaprojektowany, by zwolnić ciało i uspokoić umysł.",
      details:
        "Prywatna sesja SPA z olejkami aromaterapeutycznymi, ciepłymi ręcznikami i zsynchronizowanymi zabiegami. Pozwólcie, by stres dnia codziennego rozpłynął się w przestrzeni zaprojektowanej dla dwojga.",
    },
    {
      title: "Śniadanie do Łóżka",
      description:
        "Powolny poranek ze śniadaniem podanym prywatnie do pokoju.",
      details:
        "Świeże pieczywo, sezonowe owoce, kawa i sok — dostarczone do pokoju o wybranej przez Was porze. Bez pośpiechu, bez restauracyjnych tłumów. Tylko Wy dwoje i cichy poranek.",
    },
    {
      title: "Późne Wymeldowanie",
      description:
        "Zostańcie trochę dłużej, bez konieczności spieszyć się z pożegnaniem.",
      details:
        "Wymeldowanie jest przedłużone do 15:00, dając Wam czas na ostatni spacer, poranną kawę na tarasie lub po prostu kilka dodatkowych godzin w łóżku przed wyjazdem.",
    },
  ],
};

export const timelineTranslations: Record<
  Lang,
  { phase: string; title: string; description: string }[]
> = {
  en: [
    {
      phase: "Arrival",
      title: "Private check-in",
      description:
        "Welcome drink, room prepared with romantic details, no queue at reception.",
    },
    {
      phase: "Evening",
      title: "Candlelight dinner",
      description:
        "Seasonal dinner with wine pairing, followed by a quiet walk or lounge time.",
    },
    {
      phase: "Morning",
      title: "Slow morning",
      description:
        "Breakfast in bed, spa ritual for two, late checkout until 3pm.",
    },
  ],
  pl: [
    {
      phase: "Przyjazd",
      title: "Prywatne zameldowanie",
      description:
        "Napój powitalny, pokój przygotowany z romantycznymi detalami, żadnej kolejki w recepcji.",
    },
    {
      phase: "Wieczór",
      title: "Kolacja przy świecach",
      description:
        "Sezonowa kolacja z doborem win, a następnie spacer lub czas w lounge barze.",
    },
    {
      phase: "Poranek",
      title: "Wolny poranek",
      description:
        "Śniadanie do łóżka, rytuał SPA dla dwojga, późne wymeldowanie do 15:00.",
    },
  ],
};

export const faqTranslations: Record<Lang, { question: string; answer: string }[]> = {
  en: [
    {
      question: "What is included in the Romantic Escape package?",
      answer:
        "The package includes a one-night stay in a premium suite, candlelit dinner for two, a spa ritual for two, breakfast in bed, and late checkout until 3pm.",
    },
    {
      question: "Can I add flowers or prosecco?",
      answer:
        "Yes. You can add fresh flowers, a bottle of prosecco, or a handwritten note during the booking process. These also make excellent surprises upon arrival.",
    },
    {
      question: "Is this package suitable for a proposal?",
      answer:
        "Absolutely. Many guests choose the Romantic Escape for proposals. We can arrange a private dinner setup, flowers, and even a photographer on request.",
    },
    {
      question: "Can I buy it as a gift voucher?",
      answer:
        "Yes. The Romantic Escape is available as a gift voucher with a personalized message. You can also add flowers, prosecco, or other upgrades.",
    },
    {
      question: "Is dinner included?",
      answer:
        "Yes. A seasonal multi-course dinner for two is included, served in our restaurant or, on request, in your suite.",
    },
    {
      question: "Can we extend the stay to two nights?",
      answer:
        "Yes. You can extend to two nights at a reduced rate. The second night includes breakfast and access to all hotel facilities.",
    },
  ],
  pl: [
    {
      question: "Co zawiera pakiet Romantic Escape?",
      answer:
        "Pakiet obejmuje nocleg w apartamencie premium, kolację przy świecach dla dwojga, rytuał SPA dla dwojga, śniadanie do łóżka oraz późne wymeldowanie do 15:00.",
    },
    {
      question: "Czy mogę dodać kwiaty lub prosecco?",
      answer:
        "Tak. Możesz dodać świeże kwiaty, butelkę prosecco lub odręczną wiadomość podczas procesu rezerwacji. To również doskonałe niespodzianki na powitanie.",
    },
    {
      question: "Czy ten pakiet nadaje się na oświadczyny?",
      answer:
        "Oczywiście. Wielu gości wybiera Romantic Escape na oświadczyny. Możemy zorganizować prywatną kolację, kwiaty, a nawet fotografa na życzenie.",
    },
    {
      question: "Czy mogę kupić pakiet jako bon podarunkowy?",
      answer:
        "Tak. Romantic Escape jest dostępny jako bon podarunkowy z osobistą wiadomością. Możesz również dodać kwiaty, prosecco lub inne dodatki.",
    },
    {
      question: "Czy kolacja jest wliczona w cenę?",
      answer:
        "Tak. Sezonowa, wielodaniowa kolacja dla dwojga jest wliczona, serwowana w naszej restauracji lub na życzenie w apartamencie.",
    },
    {
      question: "Czy mogę przedłużyć pobyt o drugą noc?",
      answer:
        "Tak. Możesz przedłużyć pobyt o drugą noc w obniżonej cenie. Druga noc obejmuje śniadanie i dostęp do wszystkich udogodnień hotelowych.",
    },
  ],
};
