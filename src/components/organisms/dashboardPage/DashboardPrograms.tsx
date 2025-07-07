import { useUser } from "@/contexts/UserContext";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const DashboardPrograms = () => {
  const { t } = useTranslation();
  const { savedPrograms, removeSavedProgram } = useUser();

  const handleUnsaveProgram = (programId: string, programTitle: string) => {
    removeSavedProgram(programId);
    toast({
      title: t("dashboard.programs.toast.title"),
      description: `${programTitle} ${t("dashboard.programs.toast.title")}`,
    });
  };

  return savedPrograms.length === 0 ? (
    <Card>
      <CardContent className="pt-6 text-center">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">{t("dashboard.programs.no_saved")}</p>
      </CardContent>
    </Card>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {savedPrograms.map((program) => (
        <Card key={program.id} className="card-hover">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-2xl">{program.countryFlag}</span>
                <span className="text-sm text-gray-500">{program.country}</span>
              </div>
              {program.funding === "full" && (
                <Badge className="bg-success text-success-foreground">
                  {t("dashboard.programs.full_funded")}
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg line-clamp-2">
              {program.title}
            </CardTitle>
            <CardDescription>{program.university}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>{t("dashboard.programs.deadline")}</span>
                <span className="font-medium">{program.deadline}</span>
              </div>
              <div className="flex space-x-3 rtl:space-x-reverse">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleUnsaveProgram(program.id, program.title)}
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  {t("dashboard.programs.removed")}
                </Button>
                <Button size="sm" className="flex-1">
                  {t("dashboard.programs.details")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
