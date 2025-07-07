import { LandingHero } from "@/components";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import UniGuideChat from "@/components/UniGuideChat";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHero />
      <ProgramsShowcase />
      <UniGuideChat />
    </div>
  );
};
