
import React from 'react';
import { Player, Theme } from '../types';

interface WinPopupProps {
  winner: Player;
  isDraw: boolean;
  onReset: () => void;
  theme: Theme;
}

const WinPopup: React.FC<WinPopupProps> = ({ winner, isDraw, onReset, theme }) => {
  if (!winner && !isDraw) return null;

  const isDark = theme === Theme.DARK;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300">
      <div className={`w-full max-w-sm p-8 rounded-[2.5rem] shadow-2xl animate-pop-in flex flex-col items-center text-center ${
        isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
      }`}>
        <div className="mb-4">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Game Over
          </span>
        </div>
        
        <h2 className={`text-3xl font-bold mb-6 ${
          winner === 'X' ? 'text-indigo-500' : winner === 'O' ? 'text-rose-500' : (isDark ? 'text-slate-300' : 'text-slate-600')
        }`}>
          {winner ? `Player ${winner} Wins!` : "It's a Draw!"}
        </h2>

        {winner && (
          <div className={`text-8xl font-black mb-8 ${winner === 'X' ? 'text-indigo-500' : 'text-rose-500'}`}>
            {winner}
          </div>
        )}

        {!winner && isDraw && (
          <div className="flex gap-4 mb-8">
             <span className="text-6xl font-black text-indigo-500 opacity-50">X</span>
             <span className="text-6xl font-black text-rose-500 opacity-50">O</span>
          </div>
        )}

        <button
          onClick={onReset}
          className={`w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
            isDark
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/40 shadow-xl active:scale-95'
              : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-200 shadow-xl active:scale-95'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          New Game
        </button>
      </div>
    </div>
  );
};

export default WinPopup;
