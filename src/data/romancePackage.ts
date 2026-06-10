import {
  storyAssets,
  galleryAssets,
  placeholderImages,
} from "./romanceAssets";

export const romancePackage = {
  name: "Romantic Escape for Two",
  nameShort: "Romantic Escape",
  priceFrom: 1890,
  currency: "PLN",
  priceLabel: "From 1 890 PLN / 2 people",
};

export const heroContent = {
  eyebrow: "A private escape for two",
  headline: "Make time feel slower, together.",
  subtitle:
    "A romantic stay designed for anniversaries, quiet celebrations and weekends made only for the two of you.",
  ctaPrimary: "Reserve your escape",
  ctaSecondary: "See what's included",
};

export const emotionalPromise = {
  text: "Not every celebration needs a crowd. Some are better remembered in a quiet room, over candlelight, warm water and one unhurried morning.",
};

export const includedItems = [
  {
    id: "01",
    title: "Private Suite",
    description:
      "A beautifully prepared room with romantic details waiting on arrival.",
    details:
      "Your suite will be prepared with fresh flowers, a bottle of chilled water, and soft lighting. The bed is turned down, the curtains drawn — everything ready for an intimate evening.",
    image: storyAssets.luxuryBedroom,
  },
  {
    id: "02",
    title: "Dinner by Candlelight",
    description:
      "A seasonal dinner for two, served in an intimate evening setting.",
    details:
      "Our chef prepares a multi-course menu built around seasonal ingredients. Candlelight, soft music, and a window table with a view — dinner becomes the evening's centrepiece.",
    image: storyAssets.candlelightDinner,
  },
  {
    id: "03",
    title: "Spa Ritual for Two",
    description:
      "A calming treatment designed to slow the body and quiet the mind.",
    details:
      "A private spa session with aromatherapy oils, warm towels, and synchronized treatments. Let the stress of everyday life melt away in a space designed for two.",
    image: placeholderImages.spa,
  },
  {
    id: "04",
    title: "Breakfast in Bed",
    description:
      "A slow morning with breakfast served privately to your room.",
    details:
      "Fresh pastries, seasonal fruit, coffee and juice — delivered to your room at the time you choose. No rush, no restaurant crowds. Just the two of you and a quiet morning.",
    image: placeholderImages.breakfast,
  },
  {
    id: "05",
    title: "Late Checkout",
    description: "Stay a little longer, with no need to rush the goodbye.",
    details:
      "Checkout is extended until 3pm, giving you time for one last walk, a final coffee on the terrace, or simply a few more hours in bed before heading home.",
    image: storyAssets.terraceCouple,
  },
];

export const moods = [
  {
    id: "anniversary",
    label: "Anniversary",
    description: "For marking another year, beautifully.",
    recommendation:
      "Recommended add-on: bottle of prosecco, flowers, handwritten note",
    image: storyAssets.coupleDinner,
    cta: "Book anniversary escape",
  },
  {
    id: "proposal",
    label: "Proposal",
    description: "For the moment they will remember.",
    recommendation:
      "Recommended add-on: private dinner setup, flowers, photographer on request",
    image: storyAssets.coupleEmbrace,
    cta: "Plan your proposal",
  },
  {
    id: "weekend",
    label: "Quiet Weekend",
    description: "For disappearing from everything, together.",
    recommendation:
      "Recommended add-on: spa extension, late breakfast, room service",
    image: storyAssets.terraceCouple,
    cta: "Book a quiet weekend",
  },
];

export const timeline = {
  title: "Your stay, softly planned",
  stages: [
    {
      phase: "Arrival",
      title: "Private check-in",
      description:
        "Welcome drink, room prepared with romantic details, no queue at reception.",
      image: storyAssets.welcomeDinner,
    },
    {
      phase: "Evening",
      title: "Candlelight dinner",
      description:
        "Seasonal dinner with wine pairing, followed by a quiet walk or lounge time.",
      image: storyAssets.candlelightDinner,
    },
    {
      phase: "Morning",
      title: "Slow morning",
      description:
        "Breakfast in bed, spa ritual for two, late checkout until 3pm.",
      image: storyAssets.luxuryBedroom,
    },
  ],
};

export const giftSection = {
  headline: "Give them a weekend they will remember.",
  text: "The Romantic Escape can be prepared as a gift voucher, with a personalized message and optional add-ons.",
  addons: [
    "Voucher",
    "Flowers",
    "Prosecco",
    "Private dinner",
    "Massage upgrade",
  ],
  cta: "Create a gift experience",
};

export const galleryItems: {
  src: string;
  alt: string;
  caption: string;
}[] = [
  {
    src: storyAssets.candlelightDinner,
    alt: "Candlelight dinner table",
    caption: "Candlelight",
  },
  {
    src: storyAssets.luxuryBedroom,
    alt: "Premium hotel bedroom",
    caption: "The Suite",
  },
  { src: storyAssets.terraceCouple, alt: "Couple on terrace", caption: "Evening Terrace" },
  { src: storyAssets.coupleDinner, alt: "Intimate dinner for two", caption: "Dinner for Two" },
  {
    src: galleryAssets.celebrationCandle,
    alt: "Celebration with candle",
    caption: "Celebration",
  },
  { src: galleryAssets.coupleNight, alt: "Couple at night", caption: "Night Walk" },
  { src: placeholderImages.wine, alt: "Wine glasses", caption: "Wine Pairing" },
  { src: placeholderImages.flowers, alt: "Fresh flowers", caption: "Floral Details" },
];

export const testimonials: {
  quote: string;
  author: string;
}[] = [
  {
    quote: "It felt like the whole hotel slowed down just for us.",
    author: "— Marta & Tomasz",
  },
  {
    quote: "The dinner, the room, the silence — everything felt considered.",
    author: "— Kasia & Michał",
  },
  {
    quote: "A perfect anniversary weekend without needing to plan a thing.",
    author: "— Agnieszka & Piotr",
  },
];

export const faqItems: {
  question: string;
  answer: string;
}[] = [
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
];

export const finalCTA = {
  headline: "Some weekends stay with you.",
  subtitle:
    "Reserve a romantic escape designed entirely around the two of you.",
  cta: "Reserve your escape",
  image: storyAssets.coupleDinner,
};
