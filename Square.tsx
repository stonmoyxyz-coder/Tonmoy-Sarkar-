
import React from 'react';
import { Player, Theme } from '../types';

interface SquareProps {
  value: Player;
  onClick: () => void;
  isWinning: boolean;
  theme: Theme;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning, theme, disabled }) => {
  const isDark = theme === Theme.DARK;

  const baseStyles = "flex items-center justify-center rounded-2xl text-4xl font-bold transition-all duration-300 transform square-inner select-none cursor-pointer";
  
  const winAnimationClass = isWinning 
    ? (value === 'X' ? 'animate-zen-win-x' : 'animate-zen-win-o') 
    : '';

  // Subtle themed glow for winning squares
  const glowStyles = isWinning 
    ? (value === 'X' ? 'shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'shadow-[0_0_20px_rgba(244,63,94,0.3)]')
    : '';

  const themeStyles = isDark 
    ? isWinning 
      ? `bg-slate-700 z-10 ${winAnimationClass} ${glowStyles}` 
      : "bg-slate-800 hover:bg-slate-700 text-slate-100"
    : isWinning
      ? `bg-white z-10 ${winAnimationClass} ${glowStyles}`
      : "bg-white hover:bg-slate-50 text-slate-800 shadow-sm";

  const colorStyles = value === 'X' 
    ? "text-indigo-500" 
    : value === 'O' 
      ? "text-rose-500" 
      : "";

  return (
    <div 
      onClick={onClick}
      className={`${baseStyles} ${themeStyles} ${colorStyles} ${disabled ? 'cursor-default' : 'active:scale-95'} ${isWinning ? 'is-winning' : ''}`}
    >
      <span className={`winning-symbol opacity-100 transition-all duration-500 ${value ? 'scale-100' : 'scale-0'} ${isWinning ? 'font-black' : ''}`}>
        {value}
      </span>
    </div>
  );
};

export default Square;
