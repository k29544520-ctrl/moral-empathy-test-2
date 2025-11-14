export enum EmpathyType {
  FA = 'FA',
  TA = 'TA',
  FP = 'FP',
  TP = 'TP',
}

export interface Question {
  id: number;
  text: string;
  type: EmpathyType;
  reverse?: boolean;
}

export type Scores = {
  [key in EmpathyType]: number;
};

export interface Result {
  scores: Scores;
  finalType: EmpathyType;
  interpretation: string;
}

// This will be the return type of our calculation service
export interface CalculationOutput {
  scores: Scores;
  finalType: EmpathyType | null; // Null if there's a tie
  tieBreakerTypes?: EmpathyType[]; // The types that are tied
}
