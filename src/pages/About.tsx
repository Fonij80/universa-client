import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Award, Target, Heart, BookOpen } from "lucide-react";

export const About = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const stats = [
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: BookOpen, value: "10,000+", label: "Programs" },
    { icon: Users, value: "25,000+", label: "Students Helped" },
    { icon: Award, value: "85%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      titleFa: "ماموریت ما",
      description:
        "To democratize access to global higher education by connecting ambitious students with life-changing opportunities worldwide.",
      descriptionFa:
        "دموکراتیک کردن دسترسی به آموزش عالی جهانی از طریق اتصال دانشجویان جاه‌طلب با فرصت‌های تغییردهنده زندگی در سراسر جهان.",
    },
    {
      icon: Heart,
      title: "Our Values",
      titleFa: "ارزش‌های ما",
      description:
        "We believe in equality, transparency, and personalized support. Every student deserves the chance to pursue their dreams.",
      descriptionFa:
        "ما به برابری، شفافیت و پشتیبانی شخصی‌سازی شده اعتقاد داریم. هر دانش‌آموز شایسته فرصت دنبال کردن رؤیاهایش است.",
    },
    {
      icon: Users,
      title: "Our Team",
      titleFa: "تیم ما",
      description:
        "A diverse group of educators, technologists, and former international students who understand your journey.",
      descriptionFa:
        "گروهی متنوع از مربیان، فناوران و دانشجویان بین‌المللی سابق که سفر شما را درک می‌کنند.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-success/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {dir === "rtl" ? "درباره یونیورسا" : "About Universa"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {dir === "rtl"
              ? "ما در یونیورسا به این باور داریم که هر دانش‌آموز باید به فرصت‌های آموزش عالی در سراسر جهان دسترسی داشته باشد. پلتفرم ما دانشجویان را با برنامه‌های کارشناسی ارشد و دکتری متناسب با اهداف و امکاناتشان متصل می‌کند."
              : "At Universa, we believe every student should have access to world-class higher education opportunities. Our platform connects students with Master's and PhD programs that match their goals, background, and financial capabilities."}
          </p>
        </div>
      </section>

      {/* Stats Section */}
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
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">
                    {dir === "rtl" ? value.titleFa : value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {dir === "rtl" ? value.descriptionFa : value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {dir === "rtl" ? "داستان ما" : "Our Story"}
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                {dir === "rtl"
                  ? "یونیورسا در سال ۲۰۲۳ توسط گروهی از دانشجویان بین‌المللی سابق تأسیس شد که خود تجربه چالش‌های یافتن و اقدام برای برنامه‌های تحصیلی مناسب را داشتند."
                  : "Universa was founded in 2023 by a group of former international students who experienced firsthand the challenges of finding and applying to the right academic programs."}
              </p>
              <p>
                {dir === "rtl"
                  ? "ما متوجه شدیم که فرآیند جستجو و اقدام پیچیده، زمان‌بر و اغلب نامطمئن است. بنابراین تصمیم گرفتیم پلتفرمی بسازیم که این فرآیند را ساده‌تر، شفاف‌تر و قابل دسترس‌تر کند."
                  : "We realized that the search and application process was complex, time-consuming, and often uncertain. So we decided to build a platform that would make this process simpler, more transparent, and more accessible."}
              </p>
              <p>
                {dir === "rtl"
                  ? "امروز، یونیورسا به بیش از ۲۵ هزار دانشجو در سراسر جهان کمک کرده است تا برنامه‌های آموزشی مناسب پیدا کنند و مراحل پذیرش را با موفقیت طی کنند."
                  : "Today, Universa has helped over 25,000 students worldwide find suitable academic programs and successfully navigate the admission process."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
