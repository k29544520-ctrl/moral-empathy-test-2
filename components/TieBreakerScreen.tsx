import React from 'react';
import { EmpathyType } from '../types';
import { TIE_BREAKER_STATEMENTS } from '../constants';

interface TieBreakerScreenProps {
  options: EmpathyType[];
  onSelect: (selection: EmpathyType) => void;
}

const TieBreakerScreen: React.FC<TieBreakerScreenProps> = ({ options, onSelect }) => {
  return (
    <div className="text-center p-8 flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
          결과를 확정하기 위한 마지막 질문
        </h1>
        <p className="text-slate-600 mb-8 text-base md:text-lg">
          당신과 더 가깝다고 느껴지는 문장을 선택해주세요.
        </p>
        <div className="space-y-4">
            {options.map((type) => (
                <button
                    key={type}
                    onClick={() => onSelect(type)}
                    className="w-full bg-white border-2 border-slate-300 text-slate-700 font-semibold py-4 px-6 rounded-lg hover:bg-indigo-50 hover:border-indigo-500 transition-all text-left"
                >
                    {TIE_BREAKER_STATEMENTS[type]}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TieBreakerScreen;