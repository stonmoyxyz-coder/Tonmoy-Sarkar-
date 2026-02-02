
import React from 'react';
import { Theme } from '../types';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  const isDark = theme === Theme.DARK;

  const Section = ({ title, items }: { title: string, items: string[] }) => (
    <div className="mb-6 text-left">
      <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className={`text-sm flex gap-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
      <div 
        className={`w-full max-w-sm p-8 rounded-[2.5rem] shadow-2xl animate-pop-in relative overflow-hidden ${
          isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
        }`}
      >
        <button 
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
            isDark ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-700' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <h2 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
          How to Play
        </h2>

        <Section 
          title="The Rules" 
          items={[
            "Players take turns placing their marks (X or O) in an empty square.",
            "The first player to get 3 marks in a row (up, down, across, or diagonally) wins.",
            "If all 9 squares are full and no one has 3 in a row, it's a draw."
          ]}
        />

        <Section 
          title="Zen Features" 
          items={[
            "Mindful Soundscape: Enjoy haptic-style audio feedback.",
            "Visual Harmony: Minimalist design with smooth, organic transitions.",
            "Dark Mode: Relax your eyes with our slate-toned dark theme.",
            "Auto-Tracking: Your scores are saved locally throughout your session."
          ]}
        />

        <button
          onClick={onClose}
          className={`w-full py-4 mt-2 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
            isDark
              ? 'bg-slate-700 hover:bg-slate-600 text-slate-100'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
