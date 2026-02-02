
import React from 'react';
import { Player, Theme } from '../types';
import Square from './Square';
import ZenConfetti from './ZenConfetti';

interface BoardProps {
  squares: Player[];
  onClick: (i: number) => void;
  winningLine: number[] | null;
  theme: Theme;
  isGameOver: boolean;
}

const Board: React.FC<BoardProps> = ({ squares, onClick, winningLine, theme, isGameOver }) => {
  const isDark = theme === Theme.DARK;
  
  // Determine who the winner is to set particle color
  const winner = winningLine ? squares[winningLine[0]] : null;

  return (
    <div className={`relative aspect-square w-full grid grid-cols-3 grid-rows-3 gap-3 p-3 rounded-3xl transition-all ${
      isDark ? 'bg-slate-800/40 border border-slate-700' : 'bg-slate-200/50 border border-slate-200 shadow-xl'
    }`}>
      {winner && winningLine && <ZenConfetti winner={winner} winningLine={winningLine} />}
      
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinning={winningLine?.includes(i) ?? false}
          theme={theme}
          disabled={isGameOver || !!square}
        />
      ))}
    </div>
  );
};

export default Board;
