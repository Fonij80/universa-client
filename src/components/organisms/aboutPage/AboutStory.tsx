import { useTranslation } from "react-i18next";

export const AboutStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("about.story.title")}
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
            <p>{t("about.story.part_one")}</p>
            <p>{t("about.story.part_two")}</p>
            <p>{t("about.story.part_three")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
