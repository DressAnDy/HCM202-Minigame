export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type MilestoneStage = {
  yearLabel: string;
  periodLabel: string;
  milestone: string;
  title: string;
  description: string;
  detailContent: string;
  imageSrc: string;
  imageAlt: string;
  questions: QuizQuestion[];
};

export type StageState = {
  completed: boolean;
  questionIndex: number;
  lastWrong: number | null;
  /** Hoán vị: chỉ số nút hiển thị → chỉ số gốc trong `question.options` */
  optionOrder: number[] | null;
  /** `questionIndex` mà `optionOrder` hiện tại được tạo cho */
  shuffleKey: number;
};
