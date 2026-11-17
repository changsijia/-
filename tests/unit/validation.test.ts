import { describe, expect, it } from "vitest";
import { createQuestionSchema } from "@/features/questions/validation";

describe("createQuestionSchema", () => {
  it("accepts a complete question", () => {
    expect(createQuestionSchema.safeParse({ content: "一道题目", answer: "A", subject: "数学", questionType: "选择题", difficulty: "中等" }).success).toBe(true);
  });

  it("rejects an empty answer", () => {
    expect(createQuestionSchema.safeParse({ content: "一道题目", answer: "", subject: "数学", questionType: "选择题", difficulty: "中等" }).success).toBe(false);
  });
});
