# 题匣

题匣是一个面向高中生和教师的高考真题、个人题库与智能组卷应用。当前仓库提供 Next.js 全栈项目骨架，业务模块将在后续阶段逐步实现。

## 技术栈

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS 4
- Drizzle ORM + SQLite（生产环境可切换 PostgreSQL）
- Vitest + Playwright

## 环境要求

- Node.js 20.9 或更高版本
- npm 10 或 pnpm 9

## 安装依赖

```bash
npm install
```

复制环境变量模板：

```bash
copy .env.example .env.local
```

## 本地启动

```bash
npm run dev
```

打开 <http://localhost:3000>。

## 数据库命令

```bash
npm run db:push
npm run db:seed
```

当前 seed 仅为占位脚本，不会写入业务数据。

## 测试与检查

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

## 打包与生产启动

```bash
npm run build
npm run start
```

## 目录说明

- `src/app`：页面、布局和 API 路由
- `src/components`：可复用 UI 组件
- `src/features`：领域业务逻辑
- `src/db`：数据库连接、schema 和 seed
- `src/lib`：通用工具和基础设施
- `tests`：单元、集成和端到端测试

详细开发规范请阅读 [AGENTS.md](./AGENTS.md)。

## 开发阶段

1. 仓库和基础骨架
2. 真题库与试卷详情
3. 个人题库与 OCR 录入
4. 智能组卷
5. 在线练习与学习统计
6. 测试、部署和数据审核流程
