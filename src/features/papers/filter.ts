import type { Paper, PaperFilters } from "@/types";

export function filterPapers(papers: Paper[], filters: PaperFilters): Paper[] {
  const query = filters.search?.trim().toLowerCase();
  return papers.filter((paper) => {
    const matchesSubject = !filters.subject || paper.subject === filters.subject;
    const matchesProvince = !filters.province || paper.province === filters.province;
    const matchesYear = !filters.year || paper.year === filters.year;
    const matchesSearch = !query || `${paper.title} ${paper.sourceName}`.toLowerCase().includes(query);
    return matchesSubject && matchesProvince && matchesYear && matchesSearch;
  });
}
