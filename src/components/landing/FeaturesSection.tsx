import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Zap, Users, Target } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Why Choose Us?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">Expert Mentorship</h3>
              <p className="text-gray-300">
                Learn from AI experts who are currently shaping the industry with hands-on guidance and personalized feedback.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">Hands-on Learning</h3>
              <p className="text-gray-300">
                Build real AI projects and gain practical experience with the latest tools and technologies used in the industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">Career Advancement</h3>
              <p className="text-gray-300">
                Get a competitive advantage in your career with AI skills that are in high demand across all industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}