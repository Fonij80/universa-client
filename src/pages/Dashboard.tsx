import {
  DashboardApplication,
  DashboardOverview,
  DashboardProfile,
  DashboardPrograms,
} from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/contexts/UserContext";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const { profile } = useUser();

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {`${t("dashboard.welcome_back")} ${profile.name}!`}
          </h1>
          <p className="text-gray-600">{t("dashboard.description")}</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList
            className={`grid w-full grid-cols-4 ${
              dir === "rtl" ? "font-vazir" : ""
            }`}
          >
            <TabsTrigger value="overview">
              {t("dashboard.tabs_title.overview")}
            </TabsTrigger>
            <TabsTrigger value="saved">
              {t("dashboard.tabs_title.saved")}
            </TabsTrigger>
            <TabsTrigger value="applications">
              {t("dashboard.tabs_title.applications")}
            </TabsTrigger>
            <TabsTrigger value="profile">
              {t("dashboard.tabs_title.profile")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <DashboardPrograms />
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <DashboardApplication />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <DashboardProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
