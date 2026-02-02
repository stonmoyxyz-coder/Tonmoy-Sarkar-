
import React from 'react';
import { Theme, GameMode } from '../types';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, theme, onToggleTheme }) => {
  const isDark = theme === Theme.DARK;

  const ModeCard = ({ mode, title, desc, icon, accentColor }: { mode: GameMode, title: string, desc: string, icon: React.ReactNode, accentColor: string }) => (
    <button
      onClick={() => onStart(mode)}
      className={`group w-full p-6 rounded-[2rem] flex items-center text-left transition-all duration-300 transform hover:translate-y-[-4px] active:scale-[0.97] relative overflow-hidden ${
        isDark 
          ? 'bg-slate-800/80 border border-slate-700/50 hover:border-slate-600 shadow-2xl glass-card' 
          : 'bg-white/80 border border-white/50 hover:border-white shadow-xl glass-card'
      }`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${accentColor}`}></div>
      
      <div className={`w-14 h-14 mr-5 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
        isDark ? 'bg-slate-900 group-hover:bg-slate-950' : 'bg-slate-100 group-hover:bg-slate-200'
      }`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>{title}</h3>
        <p className={`text-xs font-medium opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 relative transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[15%] text-9xl font-black text-indigo-500 blur-xl animate-float">X</div>
        <div className="absolute bottom-[20%] right-[10%] text-[12rem] font-black text-rose-500 blur-2xl animate-float" style={{ animationDelay: '2s' }}>O</div>
        <div className="absolute top-[60%] left-[5%] text-7xl font-black text-indigo-400 blur-lg animate-float" style={{ animationDelay: '4s' }}>X</div>
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-8 right-8 z-10">
         <button 
          onClick={onToggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700 shadow-xl border border-slate-700' 
              : 'bg-white text-slate-600 hover:bg-slate-50 shadow-lg border border-slate-100'
          }`}
        >
          {theme === Theme.LIGHT ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center max-w-sm w-full text-center z-10 animate-pop-in">
        <div className={`w-28 h-28 mb-8 flex items-center justify-center rounded-[2.5rem] relative ${isDark ? 'bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]'}`}>
          <div className="relative w-14 h-14">
            <span className="absolute top-0 left-0 text-5xl font-black text-indigo-500 drop-shadow-xl">X</span>
            <span className="absolute bottom-0 right-0 text-5xl font-black text-rose-500 drop-shadow-xl">O</span>
          </div>
          <div className={`absolute inset-0 rounded-[2.5rem] border-4 ${isDark ? 'border-indigo-500/20' : 'border-indigo-500/10'}`}></div>
        </div>

        <h1 className={`text-5xl font-extrabold tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Zen<span className="text-indigo-500">.</span>
          <span className="block text-xl font-medium tracking-[0.2em] uppercase mt-2 opacity-50">Tic Tac Toe</span>
        </h1>
        
        <p className={`text-sm mb-12 font-medium max-w-[240px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Experience the classic strategy game in a calm and modern workspace.
        </p>

        <div className="grid grid-cols-1 gap-4 w-full px-2">
          <ModeCard 
            mode="computer" 
            title="Play vs Computer" 
            desc="Master your moves against our AI"
            accentColor="bg-indigo-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <ModeCard 
            mode="friends" 
            title="Play vs Friend" 
            desc="Share the board with a partner"
            accentColor="bg-rose-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 w-full">
           <div className={`h-[1px] w-24 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
           <p className={`text-[10px] font-bold uppercase tracking-[0.5em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              Version 2.0 &bull; 2024
           </p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
