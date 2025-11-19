"use client";

import { Heart, Github, User, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-950 mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide text-center">
            Connect
          </h3>
          <div className="flex gap-4 justify-center items-center">
            <a
              href="https://vigneshgbe.neocities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="Portfolio"
            >
              <User className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/vigneshgbe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/vigneshgbe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} AI Fitness Coach. All rights reserved.
          </p>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}