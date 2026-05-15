import HeroSection from "@/components/hero/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import HistorySection from "@/components/sections/HistorySection";
import NetworkSection from "@/components/sections/NetworkSection";
import StatsBar from "@/components/sections/StatsBar";
import EventsListSection from "@/components/sections/EventsListSection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import VoicesSection from "@/components/sections/VoicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <QuoteSection />
      <MissionVisionSection />
      <HistorySection />
      <NetworkSection />
      <StatsBar />
      <EventsListSection />
      <InitiativesSection />
      <VoicesSection />
    </>
  );
}
