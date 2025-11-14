
import { QUESTIONS, INTERPRETATIONS } from '../constants';
import { EmpathyType, Result, Scores } from '../types';

export const calculateResults = (answers: number[]): Result => {
  const scores: Scores = {
    [EmpathyType.FA]: 0,
    [EmpathyType.TA]: 0,
    [EmpathyType.FP]: 0,
    [EmpathyType.TP]: 0,
  };

  answers.forEach((answer, index) => {
    if (answer > 0) {
      const question = QUESTIONS[index];
      const score = question.reverse ? 6 - answer : answer;
      scores[question.type] += score;
    }
  });

  let finalType: EmpathyType = EmpathyType.TP;
  let maxScore = -1;

  for (const type in scores) {
    if (scores[type as EmpathyType] > maxScore) {
      maxScore = scores[type as EmpathyType];
      finalType = type as EmpathyType;
    }
  }

  return {
    scores,
    finalType,
    interpretation: INTERPRETATIONS[finalType],
  };
};