import { NextResponse } from "next/server";
import { demoPapers } from "@/features/papers/data";
import { filterPapers } from "@/features/papers/filter";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const subject = params.get("subject") as Parameters<typeof filterPapers>[1]["subject"];
  const yearValue = params.get("year");
  const papers = filterPapers(demoPapers, {
    subject: subject || undefined,
    province: params.get("province") || undefined,
    year: yearValue ? Number(yearValue) : undefined,
    search: params.get("search") || undefined,
  });
  return NextResponse.json({ data: papers, meta: { total: papers.length } });
}
