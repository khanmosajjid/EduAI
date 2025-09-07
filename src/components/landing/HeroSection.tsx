import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Brain, Sparkles, Target } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl text-white leading-tight">
                <span className="block">Unleash your</span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  future with AI
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Learn, create, and innovate with our cutting-edge programs designed to unlock your potential in the AI revolution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted} 
                size="lg" 
                className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black border-0 px-8"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl text-purple-400">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-yellow-400">4.9★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Interactive Animation */}
          <div className="relative">
            <div className="w-full max-w-lg mx-auto relative">
              {/* Main AI Brain Center */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30 animate-pulse delay-150"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-40 animate-pulse delay-300"></div>
                <div className="absolute inset-16 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-50 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-white animate-pulse" />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-100"></div>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2">
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>

                {/* Secondary Orbit */}
                <div className="absolute inset-8 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-100"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200"></div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-8 -left-8 bg-slate-800/80 backdrop-blur rounded-lg p-3 border border-purple-500/30 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Learning Active</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-12 bg-slate-800/80 backdrop-blur rounded-lg p-3 border border-blue-500/30 animate-float delay-100">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm">AI Processing</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-slate-800/80 backdrop-blur rounded-lg p-3 border border-orange-500/30 animate-float delay-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-white text-sm">99.9% Accuracy</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-12 bg-slate-800/80 backdrop-blur rounded-lg p-3 border border-purple-500/30 animate-float delay-300">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-purple-400" />
                    <span className="text-white text-sm">Smart Goals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}