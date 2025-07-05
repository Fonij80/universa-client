
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProgramsShowcase from '@/components/ProgramsShowcase';
import UniGuideChat from '@/components/UniGuideChat';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <ProgramsShowcase />
        <UniGuideChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
