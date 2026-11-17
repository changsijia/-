export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-blue-600">题匣 · 项目骨架</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">高考真题与智能组卷</h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          基础运行入口已就绪。业务模块将按照 README 中的开发阶段逐步实现。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {['全国真题', '我的题库', '智能组卷'].map((item) => (
            <div key={item} className="rounded-xl bg-slate-100 p-5 text-sm font-medium text-slate-700">{item}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
