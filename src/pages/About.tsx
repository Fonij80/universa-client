import { useTranslation } from "react-i18next";
import { AboutHero, AboutStats, AboutValues, AboutStory } from "@/components";

export const About = () => {
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      <AboutHero />

      <AboutStats />

      <AboutValues />

      <AboutStory />
    </div>
  );
};
