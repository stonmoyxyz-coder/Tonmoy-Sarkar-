
import React from 'react';
import { Player, Theme } from '../types';

interface StatusIndicatorProps {
  winner: Player;
  isDraw: boolean;
  xIsNext: boolean;
  theme: Theme;
  isAiThinking?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ winner, isDraw, xIsNext, theme, isAiThinking }) => {
  const isDark = theme === Theme.DARK;
  
  let statusText = '';
  let statusColor = '';

  if (winner) {
    statusText = `Player ${winner} wins!`;
    statusColor = winner === 'X' ? 'text-indigo-500' : 'text-rose-500';
  } else if (isDraw) {
    statusText = "It's a draw!";
    statusColor = isDark ? 'text-slate-400' : 'text-slate-600';
  } else if (isAiThinking) {
    statusText = "Thinking";
    statusColor = isDark ? 'text-rose-400 font-medium tracking-tight' : 'text-rose-500 font-medium tracking-tight';
  } else {
    statusText = `${xIsNext ? "X" : "O"}'s turn`;
    statusColor = xIsNext ? 'text-indigo-500' : 'text-rose-500';
  }

  return (
    <div className={`flex items-center justify-center py-2 px-6 rounded-full self-center transition-all h-10 ${
      isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white/80 shadow-sm border border-slate-100'
    }`}>
      <div className={`text-sm font-semibold tracking-wide flex items-center gap-3 ${statusColor}`}>
        {(!winner && !isDraw) && (
          isAiThinking ? (
            <div className="flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-zen-thinking-1"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-zen-thinking-2"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-zen-thinking-3"></span>
            </div>
          ) : (
            <span className={`w-2 h-2 rounded-full animate-pulse ${xIsNext ? 'bg-indigo-500' : 'bg-rose-500'}`}></span>
          )
        )}
        <span className={isAiThinking ? 'animate-pulse duration-[2s]' : ''}>
          {statusText}
        </span>
      </div>
    </div>
  );
};

export default StatusIndicator;