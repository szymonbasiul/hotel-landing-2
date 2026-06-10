import Navigation from "@/src/components/ui/Navigation";
import ScrollToTop from "@/src/components/ui/ScrollToTop";
import RomanceHero from "@/src/components/romance/RomanceHero";
import RomanceBookingBar from "@/src/components/romance/RomanceBookingBar";
import EmotionalPromise from "@/src/components/romance/EmotionalPromise";
import IncludedCards from "@/src/components/romance/IncludedCards";
import MoodSelector from "@/src/components/romance/MoodSelector";
import RomanticTimeline from "@/src/components/romance/RomanticTimeline";
import GiftExperience from "@/src/components/romance/GiftExperience";
import RomanceGallery from "@/src/components/romance/RomanceGallery";
import RomanceTestimonials from "@/src/components/romance/RomanceTestimonials";
import RomanceFAQ from "@/src/components/romance/RomanceFAQ";
import FinalRomanceCTA from "@/src/components/romance/FinalRomanceCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <RomanceHero />
      <RomanceBookingBar />
      <EmotionalPromise />
      <IncludedCards />
      <MoodSelector />
      <RomanticTimeline />
      <GiftExperience />
      <RomanceGallery />
      <RomanceTestimonials />
      <RomanceFAQ />
      <FinalRomanceCTA />
      <ScrollToTop />
    </>
  );
}
