
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <header className={`w-full bg-white shadow-sm border-b ${dir === 'rtl' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <div className="text-2xl font-bold text-primary">
              Universa
            </div>
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('nav.search')}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('nav.dashboard')}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm"
            >
              {language === 'en' ? 'فارسی' : 'English'}
            </Button>
            <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
              {t('hero.help')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
