
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
}

export type Scores = {
  [key in EmpathyType]: number;
};

export interface Result {
  scores: Scores;
  finalType: EmpathyType;
  interpretation: string;
}
