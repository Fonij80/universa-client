
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const HeroSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: t('celebration.step'),
        description: `Searching for: ${searchQuery}`,
      });
    }
  };

  return (
    <section className={`relative bg-gradient-to-br from-primary/5 to-success/5 py-20 ${dir === 'rtl' ? 'font-vazir' : 'font-inter'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder={t('hero.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`h-14 text-lg ${dir === 'rtl' ? 'pr-14 pl-4' : 'pl-14 pr-4'} rounded-full border-2 border-gray-200 focus:border-primary`}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search 
                className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} h-6 w-6 text-gray-400`} 
              />
              <Button
                onClick={handleSearch}
                className={`absolute ${dir === 'rtl' ? 'left-2' : 'right-2'} h-10 px-6 bg-primary hover:bg-primary/90 rounded-full`}
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">{t('stats.programs')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">50+</div>
              <div className="text-gray-600">{t('stats.countries')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">85%</div>
              <div className="text-gray-600">{t('stats.funded')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
