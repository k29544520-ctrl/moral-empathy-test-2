import { QUESTIONS } from '../constants';
import { EmpathyType, CalculationOutput, Scores } from '../types';

export const calculateResults = (answers: number[]): CalculationOutput => {
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

  let maxScore = -1;
  Object.values(scores).forEach(score => {
    if (score > maxScore) {
      maxScore = score;
    }
  });

  const topTypes = (Object.keys(scores) as EmpathyType[]).filter(
    type => scores[type] === maxScore
  );

  if (topTypes.length === 1) {
    return {
      scores,
      finalType: topTypes[0],
    };
  }

  // Tie-breaker 1: Count "very strong conviction" answers (5s)
  const convictionCounts = topTypes.map(type => {
    let count = 0;
    QUESTIONS.forEach((q, index) => {
      if (q.type === type) {
        const answer = answers[index];
        if (q.reverse) {
          // A score of 1 on a reverse question is a very strong conviction
          if (answer === 1) {
            count++;
          }
        } else {
          // A score of 5 on a normal question is a very strong conviction
          if (answer === 5) {
            count++;
          }
        }
      }
    });
    return { type, count };
  });

  let maxConvictionCount = -1;
  convictionCounts.forEach(({ count }) => {
    if (count > maxConvictionCount) {
      maxConvictionCount = count;
    }
  });

  const convictionWinners = convictionCounts
    .filter(({ count }) => count === maxConvictionCount)
    .map(({ type }) => type);

  if (convictionWinners.length === 1) {
    return {
      scores,
      finalType: convictionWinners[0],
    };
  }

  // Tie-breaker 2: User choice needed
  return {
    scores,
    finalType: null,
    tieBreakerTypes: convictionWinners, // The remaining tied types
  };
};