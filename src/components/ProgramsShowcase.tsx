import React from "react";
import ProgramCard from "./ProgramCard";
import { useTranslation } from "react-i18next";

const ProgramsShowcase: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const samplePrograms = [
    {
      title: "PhD in Computer Science - AI & Machine Learning",
      university: "Stanford University",
      country: "United States",
      countryFlag: "🇺🇸",
      funding: "full" as const,
      deadline: "Dec 15, 2024",
      eligibilityScore: 92,
      field: "Computer Science",
    },
    {
      title: "Master of Science in Data Science",
      university: "University of Oxford",
      country: "United Kingdom",
      countryFlag: "🇬🇧",
      funding: "partial" as const,
      deadline: "Jan 31, 2025",
      eligibilityScore: 78,
      field: "Data Science",
    },
    {
      title: "PhD in Renewable Energy Engineering",
      university: "Technical University of Munich",
      country: "Germany",
      countryFlag: "🇩🇪",
      funding: "full" as const,
      deadline: "Mar 1, 2025",
      eligibilityScore: 85,
      field: "Engineering",
    },
    {
      title: "Master in International Business",
      university: "University of Toronto",
      country: "Canada",
      countryFlag: "🇨🇦",
      funding: "partial" as const,
      deadline: "Feb 15, 2025",
      eligibilityScore: 71,
      field: "Business",
    },
  ];

  return (
    <section
      className={`py-16 bg-gray-50 ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("search.bestMatch")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized recommendations based on your profile and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
