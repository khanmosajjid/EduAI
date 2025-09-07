import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Lightbulb, Brain } from "lucide-react";

interface CoursesSectionProps {
  onViewCourses: () => void;
}

export function CoursesSection({ onViewCourses }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Our Courses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI for Non-Tech Course */}
          <Card className="bg-gradient-to-br from-orange-400 to-yellow-500 border-0 p-8 text-black">
            <CardContent className="p-0">
              <div className="mb-6">
                <Lightbulb className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">AI for Non-Tech</h3>
                <p className="text-black/80 mb-6">
                  Discover how to leverage AI tools and concepts without needing
                  a technical background. Perfect for business professionals,
                  creatives, and curious minds.
                </p>
                <Button
                  variant="outline"
                  className="bg-white/20 border-black/20 text-black hover:bg-white/30 hover:cursor-pointer"
                  onClick={onViewCourses}
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI for Tech & Dev Course */}
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 p-8 text-white">
            <CardContent className="p-0">
              <div className="mb-6">
                <Brain className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">
                  AI for Tech & Dev
                </h3>
                <p className="text-white/80 mb-6">
                  Deep dive into machine learning, neural networks, and AI
                  development. Build real AI applications and understand the
                  technical foundations.
                </p>
                <Button
                  variant="outline"
                  className="bg-white/20 border-white/20 text-white hover:bg-white/30 hover:cursor-pointer"
                  onClick={onViewCourses}
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
