import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import GallerySection from "@/components/sections/GallerySection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <EventsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
