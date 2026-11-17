export type Subject = "数学" | "物理" | "英语" | "语文";
export type QuestionType = "选择题" | "填空题" | "解答题";
export type Difficulty = "简单" | "中等" | "困难";

export type Question = {
  id: string;
  content: string;
  answer: string;
  analysis: string;
  subject: Subject;
  questionType: QuestionType;
  difficulty: Difficulty;
  knowledgePoints: string[];
  sourceLabel: string;
  sourceType: "高考真题" | "我的题库";
};

export type Paper = {
  id: string;
  title: string;
  province: string;
  year: number;
  subject: Subject;
  questionCount: number;
  sourceName: string;
  sourceUrl: string;
  questions: Question[];
};

export type PaperFilters = {
  subject?: Subject;
  province?: string;
  year?: number;
  search?: string;
};
