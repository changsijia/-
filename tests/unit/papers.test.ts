import { describe, expect, it } from "vitest";
import { demoPapers } from "@/features/papers/data";
import { filterPapers } from "@/features/papers/filter";

describe("filterPapers", () => {
  it("filters by province and subject", () => {
    const result = filterPapers(demoPapers, { province: "浙江", subject: "数学" });
    expect(result).toHaveLength(1);
    expect(result[0]?.title).toContain("浙江");
  });

  it("searches paper title and source", () => {
    expect(filterPapers(demoPapers, { search: "教育考试院" })).toHaveLength(3);
    expect(filterPapers(demoPapers, { year: 1999 })).toHaveLength(0);
  });
});
