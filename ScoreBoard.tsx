
import React from 'react';
import { Score, Theme } from '../types';

interface ScoreBoardProps {
  scores: Score;
  theme: Theme;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, theme }) => {
  const isDark = theme === Theme.DARK;
  
  const Card = ({ label, value, colorClass }: { label: string, value: number, colorClass: string }) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-2xl flex-1 transition-all ${
      isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100 shadow-sm'
    }`}>
      <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        {label}
      </span>
      <span className={`text-xl font-semibold ${colorClass}`}>
        {value}
      </span>
    </div>
  );

  return (
    <div className="flex gap-3 w-full">
      <Card label="Player X" value={scores.X} colorClass="text-indigo-500" />
      <Card label="Draws" value={scores.draws} colorClass={isDark ? 'text-slate-300' : 'text-slate-600'} />
      <Card label="Player O" value={scores.O} colorClass="text-rose-500" />
    </div>
  );
};

export default ScoreBoard;
