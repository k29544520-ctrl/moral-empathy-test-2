
import React from 'react';
import { Result, EmpathyType } from '../types';

interface ResultScreenProps {
  result: Result;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const { scores, finalType, interpretation } = result;

  const typeColors: { [key in EmpathyType]: string } = {
    [EmpathyType.FA]: 'bg-green-500',
    [EmpathyType.TA]: 'bg-blue-500',
    [EmpathyType.FP]: 'bg-yellow-500',
    [EmpathyType.TP]: 'bg-red-500',
  };

  const maxScore = 25; // 5 questions * 5 max score

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-slate-600 text-lg">당신의 공감 유형은...</h2>
        <h1 className="text-5xl font-extrabold text-indigo-700 my-4">{finalType}</h1>
        <p className="text-xl font-semibold text-slate-800 bg-indigo-50 p-4 rounded-lg">
          "{interpretation}"
        </p>
        
        <div className="my-8 text-left">
          <h3 className="text-lg font-bold mb-4 text-center">유형별 점수</h3>
          {Object.entries(scores).map(([type, score]) => {
            const percentage = (score / maxScore) * 100;
            return (
              <div key={type} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-700">{type}</span>
                  <span className="font-bold text-slate-800">{score} / {maxScore}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div
                    className={`${typeColors[type as EmpathyType]} h-4 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button
          onClick={onRestart}
          className="mt-6 bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-transform transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        >
          다시 검사하기
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
