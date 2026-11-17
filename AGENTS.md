# Codex 开发规范

## 项目目标

题匣是一个面向高考学习场景的真题、个人题库和组卷工具。当前仓库阶段只维护基础骨架，业务功能按 README 的开发阶段逐步落地。

## 代码风格

- 使用 TypeScript，开启严格模式；避免 `any`，公共数据结构优先使用 `src/types` 中的类型。
- React 组件使用函数组件和 Server Components；只有需要浏览器 API 或交互状态时才添加 `"use client"`。
- 使用 2 个空格缩进，双引号，末尾保留分号；提交前运行 `npm run lint` 和 `npm run typecheck`。
- 业务校验统一使用 Zod；API 返回值保持稳定、明确的错误结构。
- 不在组件内直接访问数据库；数据库操作放在 `src/features` 或 `src/db`。

## 目录约定

- `src/app` 只负责路由、页面组合和 Route Handlers。
- `src/components` 放可复用的展示组件；按领域分目录。
- `src/features` 放领域业务逻辑，不与具体页面强绑定。
- `src/db` 放数据库连接、schema 和 seed。
- `src/lib` 放跨领域基础设施和工具。
- `tests/unit`、`tests/integration`、`tests/e2e` 分别存放单元、集成和端到端测试。
- 环境变量只写入 `.env.local`，不得提交密钥、用户数据或上传文件。

## 数据与安全

- 真题数据必须记录来源，并在发布前经过审核和版权确认。
- 用户上传的图片和文件不得进入 Git；生产环境使用对象存储。
- 所有用户输入都要在服务端重新校验；后台路由必须验证权限。

## 提交规范

提交信息使用 Conventional Commits：

- `feat:` 新功能
- `fix:` 缺陷修复
- `refactor:` 重构
- `test:` 测试
- `docs:` 文档
- `chore:` 工具或依赖

每个提交只解决一个清晰主题。创建 PR 前必须通过 `npm run lint`、`npm run typecheck` 和相关测试。
