
import React from 'react';
import { Question } from '../types';
import ProgressBar from './ProgressBar';
import LikertScale from './LikertScale';

interface QuestionnaireScreenProps {
  questions: Question[];
  answers: number[];
  currentQuestionIndex: number;
  onAnswer: (questionIndex: number, value: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

const QuestionnaireScreen: React.FC<QuestionnaireScreenProps> = ({
  questions,
  answers,
  currentQuestionIndex,
  onAnswer,
  onNext,
  onPrev,
  onFinish,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isAnswered = answers[currentQuestionIndex] > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
        <div className="text-center my-8">
          <p className="text-slate-500 font-semibold mb-2">
            Question {currentQuestion.id} / {questions.length}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed">
            {currentQuestion.text}
          </h2>
        </div>
        
        <LikertScale
          selectedValue={answers[currentQuestionIndex]}
          onSelect={(value) => onAnswer(currentQuestionIndex, value)}
        />
        
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={onPrev}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 text-slate-600 font-semibold rounded-full hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            이전
          </button>
          
          {isLastQuestion ? (
            <button
              onClick={onFinish}
              disabled={!isAnswered}
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              결과 보기
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={!isAnswered}
              className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-600 transition shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              다음
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireScreen;
