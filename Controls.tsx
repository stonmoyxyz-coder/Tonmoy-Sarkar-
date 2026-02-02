
import React from 'react';
import { Theme } from '../types';

interface ControlsProps {
  onReset: () => void;
  onBackToMenu: () => void;
  theme: Theme;
}

const Controls: React.FC<ControlsProps> = ({ onReset, onBackToMenu, theme }) => {
  const isDark = theme === Theme.DARK;

  return (
    <div className="flex flex-col gap-3 w-full mt-2">
      <button
        onClick={onReset}
        className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
          isDark
            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/20 shadow-lg active:scale-[0.98]'
            : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-200 shadow-xl active:scale-[0.98]'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        New Game
      </button>
      
      <button
        onClick={onBackToMenu}
        className={`w-full py-3 rounded-2xl font-semibold text-[10px] tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
          isDark
            ? 'text-slate-500 hover:text-slate-300'
            : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        Back to Menu
      </button>
    </div>
  );
};

export default Controls;
