
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    'nav.search': 'Search Programs',
    'nav.dashboard': 'Dashboard',
    'nav.about': 'About',
    'hero.title': 'Find Your Perfect Academic Journey',
    'hero.subtitle': 'Discover Master\'s and PhD programs worldwide with personalized recommendations and funding opportunities',
    'hero.search': 'Search programs, universities, or fields...',
    'hero.cta': 'Start Your Journey',
    'hero.help': 'Need help? Ask UniGuide!',
    'stats.programs': 'Programs Available',
    'stats.countries': 'Countries',
    'stats.funded': 'Fully Funded',
    'search.filters': 'Filters',
    'search.field': 'Field of Study',
    'search.country': 'Country',
    'search.funding': 'Funding Type',
    'search.deadline': 'Application Deadline',
    'search.bestMatch': 'Best Match for You',
    'program.funded': '100% Funded',
    'program.partial': 'Partial Funding',
    'program.deadline': 'Deadline',
    'program.eligibility': 'Eligibility Score',
    'program.save': 'Save Program',
    'program.apply': 'Start Application',
    'dashboard.welcome': 'Welcome back!',
    'dashboard.progress': 'Application Progress',
    'dashboard.saved': 'Saved Programs',
    'dashboard.deadlines': 'Upcoming Deadlines',
    'chat.title': 'UniGuide Assistant',
    'chat.placeholder': 'Ask me anything about applications...',
    'celebration.saved': 'Program saved! 🎯',
    'celebration.step': 'Great progress! You\'re one step closer! 🎉'
  },
  fa: {
    'nav.search': 'جستجوی برنامه‌ها',
    'nav.dashboard': 'پیشخوان',
    'nav.about': 'درباره ما',
    'hero.title': 'سفر تحصیلی ایده‌آل خود را پیدا کنید',
    'hero.subtitle': 'برنامه‌های کارشناسی ارشد و دکتری را در سراسر جهان با توصیه‌های شخصی‌سازی شده و فرصت‌های تأمین مالی کشف کنید',
    'hero.search': 'جستجوی برنامه‌ها، دانشگاه‌ها یا رشته‌ها...',
    'hero.cta': 'سفر خود را شروع کنید',
    'hero.help': 'کمک نیاز دارید؟ از یونی‌گاید بپرسید!',
    'stats.programs': 'برنامه موجود',
    'stats.countries': 'کشور',
    'stats.funded': 'کاملاً تأمین مالی شده',
    'search.filters': 'فیلترها',
    'search.field': 'رشته تحصیلی',
    'search.country': 'کشور',
    'search.funding': 'نوع تأمین مالی',
    'search.deadline': 'مهلت ارسال درخواست',
    'search.bestMatch': 'بهترین انطباق برای شما',
    'program.funded': '۱۰۰٪ تأمین مالی شده',
    'program.partial': 'تأمین مالی جزئی',
    'program.deadline': 'مهلت',
    'program.eligibility': 'امتیاز واجد شرایط بودن',
    'program.save': 'ذخیره برنامه',
    'program.apply': 'شروع درخواست',
    'dashboard.welcome': 'خوش برگشتی!',
    'dashboard.progress': 'پیشرفت درخواست',
    'dashboard.saved': 'برنامه‌های ذخیره شده',
    'dashboard.deadlines': 'مهلت‌های پیش رو',
    'chat.title': 'دستیار یونی‌گاید',
    'chat.placeholder': 'هر سوالی در مورد درخواست‌ها داشته باشید...',
    'celebration.saved': 'برنامه ذخیره شد! 🎯',
    'celebration.step': 'پیشرفت عالی! یک قدم به هدف نزدیک‌تر شدی! 🎉'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
