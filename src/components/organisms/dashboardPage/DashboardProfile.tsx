import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/contexts/UserContext";
import { DollarSign, GraduationCap, MapPin, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const DashboardProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
          <User className="h-5 w-5" />
          <span>{t("dashboard.profile.personal_info")}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              {t("dashboard.profile.name")}
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">{profile.name}</div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              {t("dashboard.profile.age")}
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">{profile.age}</div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              {t("dashboard.profile.major")}
            </label>
            <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
              <GraduationCap className="h-4 w-4 text-gray-500" />
              <span>{profile.major}</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              {t("dashboard.profile.gpa")}
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">{profile.gpa}/4.0</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            {t("dashboard.profile.preferred_countries")}
          </label>
          <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{profile.preferredCountries.join(", ")}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            {t("dashboard.profile.budget")}
          </label>
          <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span>{profile.budget}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            {t("dashboard.profile.experience")}
          </label>
          <div className="p-3 bg-gray-50 rounded-lg">{profile.experience}</div>
        </div>
      </CardContent>
    </Card>
  );
};
