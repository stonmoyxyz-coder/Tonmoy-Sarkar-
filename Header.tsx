
import React from 'react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenHelp: () => void;
  onOpenHistory: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, isMuted, onToggleMute, onOpenHelp, onOpenHistory }) => {
  const isDark = theme === Theme.DARK;
  
  return (
    <header className="flex justify-between items-center w-full">
      <h1 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
        Tic Tac Toe
      </h1>
      <div className="flex gap-2">
        <button 
          onClick={onOpenHistory}
          className={`p-2 rounded-full transition-colors ${
            isDark 
              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-100' 
              : 'bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 shadow-sm border border-slate-200'
          }`}
          aria-label="View history"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button 
          onClick={onOpenHelp}
          className={`p-2 rounded-full transition-colors ${
            isDark 
              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-100' 
              : 'bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 shadow-sm border border-slate-200'
          }`}
          aria-label="Open instructions"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button 
          onClick={onToggleMute}
          className={`p-2 rounded-full transition-colors ${
            isDark 
              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-100' 
              : 'bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 shadow-sm border border-slate-200'
          }`}
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" stroke="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
        <button 
          onClick={onToggleTheme}
          className={`p-2 rounded-full transition-colors ${
            isDark 
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
              : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200'
          }`}
          aria-label="Toggle theme"
        >
          {theme === Theme.LIGHT ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
