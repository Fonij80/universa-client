import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`w-full bg-white shadow-sm border-b ${
        dir === "rtl" ? "font-vazir" : "font-inter"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-2xl font-bold text-primary">
              Universa
            </Link>
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t("nav.search")}
              </Link>
              <Link
                to="/dashboard"
                className={`transition-colors ${
                  isActive("/dashboard")
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t("nav.dashboard")}
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about")
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t("nav.about")}
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm"
            >
              {language === "en" ? "فارسی" : "English"}
            </Button>
            <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
              {t("hero.help")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
