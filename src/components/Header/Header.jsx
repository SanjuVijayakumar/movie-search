import React from "react";
import { Film, Search, Heart, Sun, Moon } from "lucide-react";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-200 bg-white/95 text-black backdrop-blur-md transition-colors duration-300 dark:border-red-900/30 dark:bg-black/95 dark:text-white">
    
          <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    
            {/* Logo */}
            <div className="flex items-center gap-3">
    
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/30">
                <Film size={24} strokeWidth={2.2} />
              </div>
    
              <div>
                <h1 className="text-xl font-extrabold tracking-wide sm:text-2xl">
                  Movie <span className="text-red-600">Track</span>
                </h1>
    
                <p className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500 sm:block">
                  Your Movie Journey
                </p>
              </div>
    
            </div>
    
            {/* Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
    
              <a
                href="#home"
                className="text-sm font-medium text-gray-700 transition hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500"
              >
                Home
              </a>
    
              <a
                href="#movies"
                className="text-sm font-medium text-gray-700 transition hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500"
              >
                Movies
              </a>
    
              <a
                href="#favorites"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500"
              >
                <Heart size={17} />
                Favorites
              </a>
    
            </nav>
    
            {/* Right Side */}
            <div className="flex items-center gap-2">
    
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-700 transition duration-300 hover:border-red-500 hover:bg-red-50 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-yellow-400 dark:hover:border-red-600 dark:hover:bg-red-950/30"
              >
                {theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
    
              {/* Search */}
              <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                <Search size={18} />
    
                <span className="hidden sm:inline">
                  Search
                </span>
              </button>
    
            </div>
    
          </div>
    
          {/* Red Accent */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    
        </header>
  );
};

export default Header;
