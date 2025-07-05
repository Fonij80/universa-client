
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

interface ProgramCardProps {
  title: string;
  university: string;
  country: string;
  countryFlag: string;
  funding: 'full' | 'partial' | 'none';
  deadline: string;
  eligibilityScore: number;
  field: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  university,
  country,
  countryFlag,
  funding,
  deadline,
  eligibilityScore,
  field
}) => {
  const { t, dir } = useLanguage();
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: t('celebration.saved'),
      description: `${title} ${isSaved ? 'removed from' : 'added to'} your saved programs`,
    });
  };

  const getFundingBadge = () => {
    switch (funding) {
      case 'full':
        return <Badge className="bg-success text-success-foreground">{t('program.funded')}</Badge>;
      case 'partial':
        return <Badge variant="secondary">{t('program.partial')}</Badge>;
      default:
        return null;
    }
  };

  const getScoreColor = () => {
    if (eligibilityScore >= 80) return 'text-success';
    if (eligibilityScore >= 60) return 'text-warning';
    return 'text-gray-500';
  };

  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 p-6 card-hover cursor-pointer ${dir === 'rtl' ? 'font-vazir' : 'font-inter'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-2xl">{countryFlag}</span>
          <span className="text-sm text-gray-500">{country}</span>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {getFundingBadge()}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-1">{university}</p>
      <p className="text-sm text-gray-500 mb-4">{field}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{t('program.eligibility')}</span>
          <span className={`text-sm font-semibold ${getScoreColor()}`}>
            {eligibilityScore}%
          </span>
        </div>
        <Progress value={eligibilityScore} className="h-2" />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{t('program.deadline')}: {deadline}</span>
        </div>
      </div>

      <div className="flex space-x-3 rtl:space-x-reverse">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSave}
          className={`flex-1 ${isSaved ? 'bg-success/10 text-success border-success' : ''}`}
        >
          {isSaved ? '❤️ Saved' : t('program.save')}
        </Button>
        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
          {t('program.apply')}
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
