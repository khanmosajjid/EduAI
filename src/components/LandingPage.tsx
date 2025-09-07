import React from 'react';
import { Header } from './landing/Header';
import { HeroSection } from './landing/HeroSection';
import { RevolutionSection } from './landing/RevolutionSection';
import { CoursesSection } from './landing/CoursesSection';
import { FeaturesSection } from './landing/FeaturesSection';
import { BootcampSection } from './landing/BootcampSection';
import { TeamBenefitsSection } from './landing/TeamBenefitsSection';
import { CTASection } from './landing/CTASection';
import { Footer } from './landing/Footer';

interface LandingPageProps {
  onGetStarted: () => void;
  onViewCourses: () => void;
}

export function LandingPage({ onGetStarted, onViewCourses }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header onGetStarted={onGetStarted} />
      <HeroSection onGetStarted={onGetStarted} />
      <RevolutionSection />
      <CoursesSection onViewCourses={onViewCourses} />
      <FeaturesSection />
      <BootcampSection onGetStarted={onGetStarted} />
      <TeamBenefitsSection />
      <CTASection onGetStarted={onGetStarted} />
      <Footer />
    </div>
  );
}