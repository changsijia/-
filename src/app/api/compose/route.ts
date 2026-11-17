import { NextResponse } from "next/server";
import { composeQuestions } from "@/features/compose/compose";
import { allDemoQuestions } from "@/features/papers/data";
import type { ComposeConfig } from "@/types";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ComposeConfig>;
  const config: ComposeConfig = {
    subject: body.subject ?? "数学",
    questionCount: Math.max(1, Math.min(Number(body.questionCount) || 10, 50)),
    difficulty: body.difficulty ?? "不限",
    includePersonal: Boolean(body.includePersonal),
    province: body.province ?? "全部省份",
  };
  const questions = composeQuestions(allDemoQuestions, config);
  return NextResponse.json({ data: { config, questions }, meta: { total: questions.length } });
}
