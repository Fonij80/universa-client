import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/contexts/UserContext";
import { toast } from "@/hooks/use-toast";
import { Calendar, CheckCircle, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const DashboardApplication = () => {
  const { t } = useTranslation();
  const { savedPrograms, applications, updateApplicationStep } = useUser();

  const handleStepToggle = (
    programId: string,
    stepId: string,
    currentState: boolean
  ) => {
    updateApplicationStep(programId, stepId, !currentState);
    toast({
      title: !currentState
        ? t("dashboard.application.toast.title")
        : t("dashboard.application.toast.title_updated"),
      description: !currentState
        ? t("dashboard.application.toast.description")
        : t("dashboard.application.toast.description_updated"),
    });
  };

  return applications.length === 0 ? (
    <Card>
      <CardContent className="pt-6 text-center">
        <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">
          {t("dashboard.application.no_application")}
        </p>
      </CardContent>
    </Card>
  ) : (
    applications.map((application) => {
      const program = savedPrograms.find((p) => p.id === application.programId);
      if (!program) return null;

      return (
        <Card key={application.programId}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>
                  {program.university} • {program.country}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {application.progress}%
                </div>
                <div className="text-sm text-gray-500">
                  {t("dashboard.application.complete")}
                </div>
              </div>
            </div>
            <Progress value={application.progress} className="h-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {application.steps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-start space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50"
                >
                  <button
                    onClick={() =>
                      handleStepToggle(
                        application.programId,
                        step.id,
                        step.completed
                      )
                    }
                    className="mt-0.5"
                  >
                    {step.completed ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div
                      className={`font-medium ${
                        step.completed
                          ? "text-gray-500 line-through"
                          : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </div>
                    {step.dueDate && (
                      <div className="flex items-center space-x-1 rtl:space-x-reverse text-xs text-orange-600 mt-2">
                        <Calendar className="h-3 w-3" />
                        <span>{t("dashboard.application.due")}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    })
  );
};
