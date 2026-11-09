import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  title: "동행컴퍼니 | 매장이 발견되고 방문으로 이어지는 구조",
  description: "동행컴퍼니는 요식업 매장의 온라인 유입과 방문 흐름을 진단하고, 네이버 플레이스·검색광고·리뷰·콘텐츠를 매장에 맞게 운영합니다.",
  openGraph: {
    title: "동행컴퍼니 | 그래서 무엇을 해드리는지 분명하게",
    description: "매장이 어디에서 고객을 놓치고 있는지 찾고, 발견부터 방문까지 필요한 운영을 연결합니다.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
