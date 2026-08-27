import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  title: "동행컴퍼니 | 전북 로컬 인스타그램 마케팅",
  description: "인스타그램에서 매장을 발견시키고 자체 먹플루언서 미디어와 로컬 네트워크를 통해 네이버 검색과 실제 방문까지 연결하는 동행컴퍼니입니다.",
  openGraph: {
    title: "동행컴퍼니 | 좋은 매장이 더 많은 사람에게 발견되도록.",
    description: "인스타그램에서 발견시키고, 네이버에서 확신시키고, 실제 방문까지 연결합니다.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
