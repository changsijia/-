import type { Difficulty, Question, Subject } from "./question";

export type ComposeConfig = {
  subject: Subject;
  questionCount: number;
  difficulty: Difficulty | "不限";
  includePersonal: boolean;
  province: string;
};

export type Composition = {
  id: string;
  title: string;
  createdAt: string;
  config: ComposeConfig;
  questions: Question[];
};
