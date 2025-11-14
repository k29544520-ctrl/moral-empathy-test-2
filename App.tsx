import React, { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import QuestionnaireScreen from './components/QuestionnaireScreen';
import ResultScreen from './components/ResultScreen';
import TieBreakerScreen from './components/TieBreakerScreen';
import { QUESTIONS, INTERPRETATIONS } from './constants';
import { calculateResults } from './services/scoringService';
import { Result, Scores, EmpathyType } from './types';

type Screen = 'start' | 'questionnaire' | 'result' | 'tieBreaker';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('start');
  const [answers, setAnswers] = useState<number[]>(new Array(QUESTIONS.length).fill(0));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [result, setResult] = useState<Result | null>(null);
  const [scores, setScores] = useState<Scores | null>(null);
  const [tieBreakerOptions, setTieBreakerOptions] = useState<EmpathyType[]>([]);

  const handleStart = useCallback(() => {
    setScreen('questionnaire');
  }, []);

  const handleAnswer = useCallback((questionIndex: number, value: number) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = value;
      return newAnswers;
    });
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  }, [currentQuestionIndex]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  }, [currentQuestionIndex]);
  
  const handleFinish = useCallback(() => {
    const calculation = calculateResults(answers);
    setScores(calculation.scores);

    if (calculation.finalType) {
      setResult({
        scores: calculation.scores,
        finalType: calculation.finalType,
        interpretation: INTERPRETATIONS[calculation.finalType],
      });
      setScreen('result');
    } else if (calculation.tieBreakerTypes) {
      setTieBreakerOptions(calculation.tieBreakerTypes);
      setScreen('tieBreaker');
    }
  }, [answers]);

  const handleTiebreakSelect = useCallback((selectedType: EmpathyType) => {
    if (scores) {
      setResult({
        scores: scores,
        finalType: selectedType,
        interpretation: INTERPRETATIONS[selectedType],
      });
      setScreen('result');
    }
  }, [scores]);

  const handleRestart = useCallback(() => {
    setScreen('start');
    setAnswers(new Array(QUESTIONS.length).fill(0));
    setCurrentQuestionIndex(0);
    setResult(null);
    setScores(null);
    setTieBreakerOptions([]);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'questionnaire':
        return (
          <QuestionnaireScreen
            questions={QUESTIONS}
            answers={answers}
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
            onFinish={handleFinish}
          />
        );
      case 'tieBreaker':
        return <TieBreakerScreen options={tieBreakerOptions} onSelect={handleTiebreakSelect} />;
      case 'result':
        return result ? <ResultScreen result={result} onRestart={handleRestart} /> : null;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <main className="container mx-auto px-4">
      {renderScreen()}
    </main>
  );
};

export default App;
