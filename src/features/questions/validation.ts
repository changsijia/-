import { z } from "zod";

export const createQuestionSchema = z.object({
  content: z.string().trim().min(2, "题干至少需要 2 个字"),
  answer: z.string().trim().min(1, "请填写答案"),
  analysis: z.string().trim().optional().default(""),
  subject: z.enum(["数学", "物理", "英语", "语文"]),
  questionType: z.enum(["选择题", "填空题", "解答题"]),
  difficulty: z.enum(["简单", "中等", "困难"]),
});

export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
