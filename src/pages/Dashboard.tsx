import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUser } from "@/contexts/UserContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  BookOpen,
  Clock,
  CheckCircle,
  Circle,
  Calendar,
  MapPin,
  DollarSign,
  GraduationCap,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Dashboard = () => {
  const { t, dir } = useLanguage();
  const {
    profile,
    savedPrograms,
    applications,
    updateApplicationStep,
    removeSavedProgram,
  } = useUser();

  const handleUnsaveProgram = (programId: string, programTitle: string) => {
    removeSavedProgram(programId);
    toast({
      title: dir === "rtl" ? "برنامه حذف شد" : "Program Removed",
      description:
        dir === "rtl"
          ? `${programTitle} از برنامه‌های ذخیره شده حذف شد`
          : `${programTitle} has been removed from your saved programs`,
    });
  };

  const handleStepToggle = (
    programId: string,
    stepId: string,
    currentState: boolean
  ) => {
    updateApplicationStep(programId, stepId, !currentState);
    toast({
      title: !currentState
        ? dir === "rtl"
          ? "مرحله تکمیل شد! 🎉"
          : "Step Completed! 🎉"
        : dir === "rtl"
        ? "مرحله به‌روزرسانی شد"
        : "Step Updated",
      description: !currentState
        ? dir === "rtl"
          ? "عالی! یک قدم دیگر به هدفت نزدیک شدی"
          : "Great progress! You're one step closer to your goal"
        : dir === "rtl"
        ? "وضعیت مرحله به‌روزرسانی شد"
        : "Step status has been updated",
    });
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {dir === "rtl"
              ? `خوش آمدی، ${profile.name}!`
              : `Welcome back, ${profile.name}!`}
          </h1>
          <p className="text-gray-600">
            {dir === "rtl"
              ? "پیشرفت درخواست‌هایت را مدیریت کن و برنامه‌های ذخیره شده‌ات را بررسی کن"
              : "Manage your application progress and review your saved programs"}
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList
            className={`grid w-full grid-cols-4 ${
              dir === "rtl" ? "font-vazir" : ""
            }`}
          >
            <TabsTrigger value="overview">
              {dir === "rtl" ? "نمای کلی" : "Overview"}
            </TabsTrigger>
            <TabsTrigger value="saved">
              {dir === "rtl" ? "ذخیره شده" : "Saved Programs"}
            </TabsTrigger>
            <TabsTrigger value="applications">
              {dir === "rtl" ? "مراحل اقدام" : "Application Steps"}
            </TabsTrigger>
            <TabsTrigger value="profile">
              {dir === "rtl" ? "پروفایل" : "Profile"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {dir === "rtl" ? "برنامه‌های ذخیره شده" : "Saved Programs"}
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {savedPrograms.length}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {dir === "rtl" ? "متوسط پیشرفت" : "Average Progress"}
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {applications.length > 0
                      ? Math.round(
                          applications.reduce(
                            (acc, app) => acc + app.progress,
                            0
                          ) / applications.length
                        )
                      : 0}
                    %
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {dir === "rtl" ? "مهلت‌های نزدیک" : "Upcoming Deadlines"}
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {
                      savedPrograms.filter(
                        (p) => new Date(p.deadline) > new Date()
                      ).length
                    }
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            {savedPrograms.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    {dir === "rtl"
                      ? "هنوز هیچ برنامه‌ای ذخیره نکرده‌ای. از صفحه اصلی شروع کن!"
                      : "No saved programs yet. Start exploring from the homepage!"}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedPrograms.map((program) => (
                  <Card key={program.id} className="card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-2xl">
                            {program.countryFlag}
                          </span>
                          <span className="text-sm text-gray-500">
                            {program.country}
                          </span>
                        </div>
                        {program.funding === "full" && (
                          <Badge className="bg-success text-success-foreground">
                            {dir === "rtl"
                              ? "کاملاً تأمین مالی شده"
                              : "100% Funded"}
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
                          <span>{dir === "rtl" ? "مهلت:" : "Deadline:"}</span>
                          <span className="font-medium">
                            {program.deadline}
                          </span>
                        </div>
                        <div className="flex space-x-3 rtl:space-x-reverse">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleUnsaveProgram(program.id, program.title)
                            }
                            className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                          >
                            {dir === "rtl"
                              ? "حذف از ذخیره شده‌ها"
                              : "Remove from Saved"}
                          </Button>
                          <Button size="sm" className="flex-1">
                            {dir === "rtl" ? "مشاهده جزئیات" : "View Details"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            {applications.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    {dir === "rtl"
                      ? "هنوز هیچ درخواستی نداری. ابتدا برنامه‌هایی را ذخیره کن!"
                      : "No applications yet. Save some programs to start tracking your progress!"}
                  </p>
                </CardContent>
              </Card>
            ) : (
              applications.map((application) => {
                const program = savedPrograms.find(
                  (p) => p.id === application.programId
                );
                if (!program) return null;

                return (
                  <Card key={application.programId}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {program.title}
                          </CardTitle>
                          <CardDescription>
                            {program.university} • {program.country}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {application.progress}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {dir === "rtl" ? "تکمیل شده" : "Complete"}
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
                                  <span>
                                    {dir === "rtl" ? "مهلت:" : "Due:"}{" "}
                                    {step.dueDate}
                                  </span>
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
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                  <User className="h-5 w-5" />
                  <span>
                    {dir === "rtl" ? "اطلاعات شخصی" : "Personal Information"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {dir === "rtl" ? "نام" : "Name"}
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {profile.name}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {dir === "rtl" ? "سن" : "Age"}
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {profile.age}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {dir === "rtl" ? "رشته تحصیلی" : "Major"}
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>{profile.major}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {dir === "rtl" ? "معدل" : "GPA"}
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {profile.gpa}/4.0
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dir === "rtl"
                      ? "کشورهای مورد علاقه"
                      : "Preferred Countries"}
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{profile.preferredCountries.join(", ")}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dir === "rtl" ? "بودجه" : "Budget"}
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-2 rtl:space-x-reverse">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span>{profile.budget}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {dir === "rtl" ? "تجربه" : "Experience"}
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {profile.experience}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
