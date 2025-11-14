
import React from 'react';
import { LIKERT_LABELS } from '../constants';

interface LikertScaleProps {
  selectedValue: number;
  onSelect: (value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ selectedValue, onSelect }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 my-8">
      {LIKERT_LABELS.map((label, index) => {
        const value = index + 1;
        const isSelected = selectedValue === value;
        return (
          <div key={value} className="flex flex-col items-center text-center">
            <button
              onClick={() => onSelect(value)}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200
                ${isSelected 
                  ? 'bg-indigo-600 border-indigo-600 text-white scale-110 shadow-lg' 
                  : 'bg-white border-slate-300 hover:border-indigo-400'
                }`}
              aria-pressed={isSelected}
            >
              <span className="text-lg font-bold">{value}</span>
            </button>
            <label className={`mt-2 text-xs transition-colors ${isSelected ? 'text-indigo-600 font-semibold' : 'text-slate-500'}`}>
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default LikertScale;