import { NextResponse } from "next/server";
import { allDemoQuestions } from "@/features/papers/data";
import { createQuestionSchema } from "@/features/questions/validation";

export async function GET() {
  return NextResponse.json({ data: allDemoQuestions, meta: { total: allDemoQuestions.length } });
}

export async function POST(request: Request) {
  const parsed = createQuestionSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: { code: "VALIDATION_ERROR", message: parsed.error.issues[0]?.message ?? "参数错误" } }, { status: 400 });
  }
  return NextResponse.json({ data: { ...parsed.data, id: `personal-${Date.now()}`, sourceType: "我的题库" } }, { status: 201 });
}
