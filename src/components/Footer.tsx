import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm bottom-0 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Atreyi. All rights reserved.
            </p>
          </div>

          {/* Center Brand */}
          <div className="text-center">
            <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pixels & Logic by Atreyi
            </p>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-end">
              Built with 
              <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
              using React & 
              <Code2 className="w-4 h-4 mx-1 text-blue-500" />
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;