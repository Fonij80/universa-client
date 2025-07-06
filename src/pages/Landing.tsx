import { LanguageProvider } from "@/contexts/LanguageContext";
import HeroSection from "@/components/organisms/HeroSection";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import UniGuideChat from "@/components/UniGuideChat";

export const Landing = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProgramsShowcase />
        <UniGuideChat />
      </div>
    </LanguageProvider>
  );
};
