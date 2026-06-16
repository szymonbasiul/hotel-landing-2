export const heroAssets = {
  heroVideo: "/media/romance/hero/hero-couple-dinner.mp4",
  heroVideoFallback: "/media/romance/hero/hero-toast.mp4",
} as const;

export const storyAssets = {
  welcomeDinner: "/media/romance/story/welcome-dinner.jpg",
  candlelightDinner: "/media/romance/story/candlelight-dinner.jpg",
  luxuryBedroom: "/media/romance/story/luxury-bedroom.jpg",
  coupleDinner: "/media/romance/story/couple-dinner.jpg",
  coupleEmbrace: "/media/romance/story/couple-embrace.jpg",
  terraceCouple: "/media/romance/story/terrace-couple.jpg",
  cozyRoom: "/media/romance/story/cozy-room.jpg",
  suiteBedroom: "/media/romance/story/suite-bedroom.mp4",
} as const;

export const galleryAssets = {
  celebrationCandle: "/media/romance/gallery/celebration-candle.jpg",
  coupleNight: "/media/romance/gallery/couple-night.jpg",
  dinnerTable: "/media/romance/gallery/dinner-table.mp4",
} as const;

export const placeholderImages = {
  // Use existing local images from public/media to ensure they load reliably.
  candles: galleryAssets.celebrationCandle,
  spa: storyAssets.luxuryBedroom,
  breakfast: storyAssets.cozyRoom,
  flowers: storyAssets.coupleEmbrace,
  wine: storyAssets.candlelightDinner,
  terrace: storyAssets.terraceCouple,
} as const;
