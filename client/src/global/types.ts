export interface FaqsType {
  question: string;
  answer: Answer;
}

interface Answer {
  p1: string;
  p2?: string;
}

export interface LinksType {
  to: string;
  name: string;
}
