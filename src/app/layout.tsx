import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "题匣",
  description: "高考真题、个人题库与智能组卷工具",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
