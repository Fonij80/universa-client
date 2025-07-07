import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { values } from "@/constants/aboutData";

export const AboutValues = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{t(value.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t(value.description)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
