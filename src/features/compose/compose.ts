import type { ComposeConfig, Question } from "@/types";

export function composeQuestions(questions: Question[], config: ComposeConfig): Question[] {
  const candidates = questions.filter((item) => {
    const matchesSubject = item.subject === config.subject;
    const matchesDifficulty = config.difficulty === "不限" || item.difficulty === config.difficulty;
    return matchesSubject && matchesDifficulty;
  });

  return [...candidates]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(config.questionCount, candidates.length));
}
