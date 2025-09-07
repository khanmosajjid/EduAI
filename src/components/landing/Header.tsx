import React from 'react';
import { Button } from '../ui/button';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  onGetStarted: () => void;
}

export function Header({ onGetStarted }: HeaderProps) {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl text-white">Avatar AI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Our Solutions</a>
          <a href="#courses" className="text-gray-300 hover:text-white transition-colors">Our Courses</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors">Mobile App</a>
        </nav>
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