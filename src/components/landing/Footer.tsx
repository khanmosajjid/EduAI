import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg text-white">Avatar AI</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Avatar AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
