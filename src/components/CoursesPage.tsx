import React from "react";
import { CoursesHeader } from "./courses/CoursesHeader";
import { CoursesHero } from "./courses/CoursesHero";
import { CourseGrid } from "./courses/CourseGrid";
import { Footer } from "./landing/Footer";

interface CoursesPageProps {
  onBackToLanding: () => void;
  onGetStarted: () => void;
}

export function CoursesPage({
  onBackToLanding,
  onGetStarted,
}: CoursesPageProps) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <CoursesHeader
        onBackToLanding={onBackToLanding}
        onGetStarted={onGetStarted}
      />
      <CoursesHero />
      <CourseGrid onGetStarted={onGetStarted} />
      <Footer />
    </div>
  );
}
