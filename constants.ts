import { EmpathyType, Question } from './types';

export const QUESTIONS: Question[] = [
  // FA
  { id: 1, text: '다른 사람의 감정에 자연스럽게 이입되고, 그것을 말로 잘 표현하는 편이다.', type: EmpathyType.FA },
  { id: 2, text: '누군가 힘들어하면, 저는 그 마음이 느껴지고 바로 위로의 말을 건넨다.', type: EmpathyType.FA },
  { id: 3, text: '사람들과 대화할 때, 감정적인 분위기를 잘 읽고 적절히 반응한다.', type: EmpathyType.FA },
  { id: 4, text: '친구가 고민을 털어놓으면 공감하며 구체적으로 어떻게 느꼈을지 이야기해준다.', type: EmpathyType.FA },
  { id: 5, text: '다른 사람의 감정적인 이야기에 깊이 빠져드는 것은 피곤한 일이다.', type: EmpathyType.FA, reverse: true },
  // TA
  { id: 6, text: '상대방의 감정이 완전히 이해되지 않아도, 적절한 공감 표현은 할 수 있다.', type: EmpathyType.TA },
  { id: 7, text: '실제로는 크게 느껴지지 않는 감정도 상황에 맞춰 공감하는 척 할 때가 있다.', type: EmpathyType.TA },
  { id: 8, text: '분위기에 맞게 위로의 말이나 공감 표현을 잘 “연출”하는 편이다.', type: EmpathyType.TA },
  { id: 9, text: '상대의 감정을 깊이 느끼지는 못하지만, 공감적 표현은 자연스럽게 나온다.', type: EmpathyType.TA },
  { id: 10, text: '진심으로 공감되지 않을 때, 겉으로만 위로의 말을 건네는 것은 불편하다.', type: EmpathyType.TA, reverse: true },
  // FP
  { id: 11, text: '다른 사람의 감정을 깊이 이해하지만 말로 표현하기가 어렵다.', type: EmpathyType.FP },
  { id: 12, text: '공감하는 마음은 크지만 상대가 잘 느끼지 못할 때가 있다.', type: EmpathyType.FP },
  { id: 13, text: '누군가 힘들어하면 속으로는 안타깝지만, 어떻게 위로해야 할지 고민만 한다.', type: EmpathyType.FP },
  { id: 14, text: '감정적으로는 충분히 공감하지만 표현이 어색해 묵묵히 들어주는 편이다.', type: EmpathyType.FP },
  { id: 15, text: '마음속으로만 공감하는 것은 별로 의미가 없다고 생각한다.', type: EmpathyType.FP, reverse: true },
  // TP
  { id: 16, text: '다른 사람의 감정 상태를 파악하는 데 어려움을 느낀다.', type: EmpathyType.TP },
  { id: 17, text: '누군가의 고민을 들어도 크게 감정적으로 느껴지지 않는다.', type: EmpathyType.TP },
  { id: 18, text: '공감 표현이 익숙하지 않아 대부분 말을 아끼는 편이다.', type: EmpathyType.TP },
  { id: 19, text: '감정적인 대화 상황에서 자연스러운 공감 반응이 잘 떠오르지 않는다.', type: EmpathyType.TP },
  { id: 20, text: '사람들과의 감정적 교류는 나에게 활력을 준다.', type: EmpathyType.TP, reverse: true },
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

export const TYPE_DESCRIPTIONS: { [key in EmpathyType]: string } = {
  [EmpathyType.FA]: '실제로 느끼는 감정을 바탕으로 다른 사람에게 공감하고, 이를 말과 행동으로 표현하는 경향이 있습니다. 감정을 느끼는 정도와 표현하는 정도가 모두 높은 편입니다.',
  [EmpathyType.TA]: '실제로 감정을 깊이 느끼기보다는, 상황에 맞춰 공감하는 표현을 하는 데 더 익숙합니다. 감정을 느끼는 정도에 비해 표현하는 정도가 높은 편으로, 사회적 관계에서 유연하게 소통하는 모습을 보입니다.',
  [EmpathyType.FP]: '다른 사람의 감정을 깊이 느끼는 편이지만, 그것을 말이나 행동으로 표현하는 것에는 익숙하지 않습니다. 감정을 표현하는 정도에 비해 느끼는 정도가 높은 편으로, 내면의 공감 능력은 풍부하지만 겉으로 잘 드러나지 않을 수 있습니다.',
  [EmpathyType.TP]: '다른 사람의 감정을 깊이 느끼거나 그것을 표현하는 것에 큰 흥미나 필요성을 느끼지 않을 수 있습니다. 감정을 느끼는 정도와 표현하는 정도가 모두 낮은 편으로, 감정적인 소통보다는 이성적이고 사실적인 소통을 선호하는 경향이 있습니다.',
};

export const TIE_BREAKER_STATEMENTS: { [key in EmpathyType]: string } = {
    [EmpathyType.FA]: '나는 다른 사람의 감정을 생생하게 느끼고, 그 마음을 표현하는 것이 자연스럽다.',
    [EmpathyType.TA]: '나는 실제로 크게 느껴지지 않아도, 상황에 맞게 공감하는 표현을 잘 하는 편이다.',
    [EmpathyType.FP]: '나는 마음속으로는 깊이 공감하지만, 그것을 말로 표현하는 것은 어렵다.',
    [EmpathyType.TP]: '나는 감정적인 상황 자체를 분석하고 이해하려 하지만, 직접 느끼거나 표현하지는 않는다.',
};
