
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          공감 유형 진단 검사
        </h1>
        <p className="text-slate-600 mb-8 text-base md:text-lg">
          20개의 간단한 문항을 통해 당신의 공감 스타일을 알아보세요.
          <br />
          자신의 유형을 이해하고 더 나은 관계를 만들어 갈 수 있습니다.
        </p>
        <button
          onClick={onStart}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          검사 시작하기
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
