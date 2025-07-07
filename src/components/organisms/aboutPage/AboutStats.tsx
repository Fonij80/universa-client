import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { stats } from "@/constants/aboutData";

export const AboutStats = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{t(stat.label)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
