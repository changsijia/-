import { describe, expect, it } from "vitest";
import { composeQuestions } from "@/features/compose/compose";
import { allDemoQuestions } from "@/features/papers/data";

describe("composeQuestions", () => {
  it("returns questions matching subject and difficulty", () => {
    const result = composeQuestions(allDemoQuestions, { subject: "数学", questionCount: 10, difficulty: "简单", includePersonal: false, province: "全部省份" });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((item) => item.subject === "数学" && item.difficulty === "简单")).toBe(true);
  });

  it("does not return more questions than the candidate pool", () => {
    const result = composeQuestions(allDemoQuestions, { subject: "英语", questionCount: 20, difficulty: "不限", includePersonal: false, province: "全部省份" });
    expect(result).toHaveLength(2);
    expect(new Set(result.map((item) => item.id)).size).toBe(result.length);
  });
});
