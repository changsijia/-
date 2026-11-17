import type { Paper, Question } from "@/types";

const question = (
  id: string,
  content: string,
  answer: string,
  subject: Question["subject"],
  questionType: Question["questionType"],
  difficulty: Question["difficulty"],
  knowledgePoints: string[],
  sourceLabel: string,
): Question => ({
  id,
  content,
  answer,
  analysis: "本题考查基础概念与综合运算，建议先列出已知条件，再逐步验证结果。",
  subject,
  questionType,
  difficulty,
  knowledgePoints,
  sourceLabel,
  sourceType: "高考真题",
});

export const demoPapers: Paper[] = [
  {
    id: "paper-2024-national-math",
    title: "2024 年全国甲卷 · 数学",
    province: "全国卷",
    year: 2024,
    subject: "数学",
    questionCount: 3,
    sourceName: "教育部教育考试院公开试题",
    sourceUrl: "https://www.neea.edu.cn/",
    questions: [
      question("q-2024-math-1", "设集合 A={1,2,3}，则 A 的非空真子集个数为（ ）", "6", "数学", "选择题", "简单", ["集合", "逻辑"], "2024 全国甲卷数学第 1 题"),
      question("q-2024-math-2", "若函数 f(x)=x²-2x+3，则 f(x) 的最小值为（ ）", "2", "数学", "选择题", "简单", ["函数", "二次函数"], "2024 全国甲卷数学第 2 题"),
      question("q-2024-math-3", "求曲线 y=x³-3x 在区间 [-1,2] 上的最大值与最小值。", "最大值 2，最小值 -2", "数学", "解答题", "中等", ["导数", "函数"], "2024 全国甲卷数学第 18 题"),
    ],
  },
  {
    id: "paper-2024-zhejiang-math",
    title: "2024 年浙江省高考 · 数学",
    province: "浙江",
    year: 2024,
    subject: "数学",
    questionCount: 2,
    sourceName: "浙江省教育考试院公开试题",
    sourceUrl: "https://www.zjzs.net/",
    questions: [
      question("q-2024-zj-math-1", "已知向量 a=(1,2)，b=(m,1)，若 a·b=4，则 m=（ ）", "2", "数学", "选择题", "中等", ["平面向量"], "2024 浙江数学第 5 题"),
      question("q-2024-zj-math-2", "在等差数列中，a1=3，a5=11，求数列前 10 项和。", "170", "数学", "填空题", "中等", ["数列", "等差数列"], "2024 浙江数学第 12 题"),
    ],
  },
  {
    id: "paper-2023-shandong-physics",
    title: "2023 年山东省高考 · 物理",
    province: "山东",
    year: 2023,
    subject: "物理",
    questionCount: 2,
    sourceName: "山东省教育招生考试院公开试题",
    sourceUrl: "https://www.sdzk.cn/",
    questions: [
      question("q-2023-sd-physics-1", "一物体由静止开始做匀加速直线运动，4 s 内位移 32 m，求加速度。", "4 m/s²", "物理", "解答题", "中等", ["匀变速直线运动"], "2023 山东物理第 16 题"),
      question("q-2023-sd-physics-2", "关于电场线，下列说法正确的是（ ）", "电场线从正电荷或无限远出发，终止于负电荷或无限远", "物理", "选择题", "困难", ["静电场", "电场线"], "2023 山东物理第 7 题"),
    ],
  },
  {
    id: "paper-2022-guangdong-english",
    title: "2022 年广东省高考 · 英语",
    province: "广东",
    year: 2022,
    subject: "英语",
    questionCount: 2,
    sourceName: "广东省教育考试院公开试题",
    sourceUrl: "https://eea.gd.gov.cn/",
    questions: [
      question("q-2022-gd-english-1", "The research team found that regular exercise can improve ____ memory.", "short-term", "英语", "选择题", "简单", ["阅读理解", "词汇"], "2022 广东英语第 21 题"),
      question("q-2022-gd-english-2", "Write a short passage introducing a traditional festival in your hometown.", "开放性作答", "英语", "解答题", "中等", ["写作", "传统文化"], "2022 广东英语写作题"),
    ],
  },
];

export const allDemoQuestions = demoPapers.flatMap((paper) => paper.questions);
