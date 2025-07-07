import { useTranslation } from "react-i18next";

export const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-primary/10 to-success/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {t("about.hero.title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("about.hero.description")}
        </p>
      </div>
    </section>
  );
};
