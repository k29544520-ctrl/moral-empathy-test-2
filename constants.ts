
import { EmpathyType, Question } from './types';

export const QUESTIONS: Question[] = [
  // FA
  { id: 1, text: '다른 사람의 감정에 자연스럽게 이입되고, 그것을 말로 잘 표현하는 편이다.', type: EmpathyType.FA },
  { id: 2, text: '누군가 힘들어하면, 저는 그 마음이 느껴지고 바로 위로의 말을 건넨다.', type: EmpathyType.FA },
  { id: 3, text: '사람들과 대화할 때, 감정적인 분위기를 잘 읽고 적절히 반응한다.', type: EmpathyType.FA },
  { id: 4, text: '친구가 고민을 털어놓으면 공감하며 구체적으로 어떻게 느꼈을지 이야기해준다.', type: EmpathyType.FA },
  { id: 5, text: '감정이입과 감정표현이 모두 저에게 자연스럽다.', type: EmpathyType.FA },
  // TA
  { id: 6, text: '상대방의 감정이 완전히 이해되지 않아도, 적절한 공감 표현은 할 수 있다.', type: EmpathyType.TA },
  { id: 7, text: '실제로는 크게 느껴지지 않는 감정도 상황에 맞춰 공감하는 척 할 때가 있다.', type: EmpathyType.TA },
  { id: 8, text: '분위기에 맞게 위로의 말이나 공감 표현을 잘 “연출”하는 편이다.', type: EmpathyType.TA },
  { id: 9, text: '상대의 감정을 깊이 느끼지는 못하지만, 공감적 표현은 자연스럽게 나온다.', type: EmpathyType.TA },
  { id: 10, text: '공감 표현이 진심일 때도 있지만, 형식적으로 할 때도 있다.', type: EmpathyType.TA },
  // FP
  { id: 11, text: '다른 사람의 감정을 깊이 이해하지만 말로 표현하기가 어렵다.', type: EmpathyType.FP },
  { id: 12, text: '공감하는 마음은 크지만 상대가 잘 느끼지 못할 때가 있다.', type: EmpathyType.FP },
  { id: 13, text: '누군가 힘들어하면 속으로는 안타깝지만, 어떻게 위로해야 할지 고민만 한다.', type: EmpathyType.FP },
  { id: 14, text: '감정적으로는 충분히 공감하지만 표현이 어색해 묵묵히 들어주는 편이다.', type: EmpathyType.FP },
  { id: 15, text: '마음은 움직이지만 행동이나 말이 따라가지 않아 아쉬움을 느낀다.', type: EmpathyType.FP },
  // TP
  { id: 16, text: '다른 사람의 감정 상태를 파악하는 데 어려움을 느낀다.', type: EmpathyType.TP },
  { id: 17, text: '누군가의 고민을 들어도 크게 감정적으로 느껴지지 않는다.', type: EmpathyType.TP },
  { id: 18, text: '공감 표현이 익숙하지 않아 대부분 말을 아끼는 편이다.', type: EmpathyType.TP },
  { id: 19, text: '감정적인 대화 상황에서 자연스러운 공감 반응이 잘 떠오르지 않는다.', type: EmpathyType.TP },
  { id: 20, text: '다른 사람의 슬픔이나 기쁨에 함께 몰입하기가 어렵다.', type: EmpathyType.TP },
];

export const INTERPRETATIONS: { [key in EmpathyType]: string } = {
  [EmpathyType.FA]: "공감도 크고 표현도 풍부한 유형",
  [EmpathyType.TA]: "공감은 낮지만 표현은 잘하는 사회적 표현형",
  [EmpathyType.FP]: "공감은 깊지만 표현이 서툰 내면 공감형",
  [EmpathyType.TP]: "공감도 표현도 낮아 감정적 상호작용이 부담스러운 유형",
};

export const LIKERT_LABELS: string[] = [
  '전혀 그렇지 않다',
  '그렇지 않다',
  '보통이다',
  '그렇다',
  '매우 그렇다',
];
