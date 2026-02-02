
import React from 'react';
import { Theme, GameHistoryItem } from '../types';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: GameHistoryItem[];
  theme: Theme;
  onClear: () => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose, history, theme, onClear }) => {
  if (!isOpen) return null;

  const isDark = theme === Theme.DARK;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
      <div 
        className={`w-full max-w-sm p-8 rounded-[2.5rem] shadow-2xl animate-pop-in relative overflow-hidden flex flex-col max-h-[80vh] ${
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

        <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
          Game History
        </h2>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">No games recorded yet.</p>
            </div>
          ) : (
            history.map((item) => (
              <div 
                key={item.id} 
                className={`p-4 rounded-2xl flex items-center justify-between border ${
                  isDark ? 'bg-slate-900/40 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {formatDate(item.timestamp)}
                    </span>
                    <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-500'}`}>
                      {item.mode === 'computer' ? 'AI' : 'Friend'}
                    </span>
                  </div>
                  <span className={`font-semibold ${
                    item.winner === 'X' ? 'text-indigo-500' : item.winner === 'O' ? 'text-rose-500' : (isDark ? 'text-slate-300' : 'text-slate-600')
                  }`}>
                    {item.winner === 'Draw' ? 'Draw' : `Winner: ${item.winner}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-2 py-1 rounded-lg ${isDark ? 'bg-slate-800 text-indigo-400' : 'bg-white text-indigo-600'}`}>
                    X:{item.score.X}
                  </span>
                  <span className={`text-xs font-mono px-2 py-1 rounded-lg ${isDark ? 'bg-slate-800 text-rose-400' : 'bg-white text-rose-600'}`}>
                    O:{item.score.O}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClear}
            disabled={history.length === 0}
            className={`flex-1 py-3 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-30 ${
              isDark
                ? 'bg-slate-700 hover:bg-rose-900/40 hover:text-rose-400 text-slate-400'
                : 'bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500'
            }`}
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className={`flex-1 py-3 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
              isDark
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl'
                : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg'
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
