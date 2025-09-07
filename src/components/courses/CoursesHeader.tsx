import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface CoursesHeaderProps {
  onBackToLanding: () => void;
  onGetStarted: () => void;
}

export function CoursesHeader({ onBackToLanding, onGetStarted }: CoursesHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={onBackToLanding}
            className="text-gray-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl text-white">Avatar AI</span>
          </div>
        </div>
        <Button 
          onClick={onGetStarted} 
          className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black border-0"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}