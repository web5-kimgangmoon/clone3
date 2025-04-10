import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});
export const metadata: Metadata = {
  title: "airbnb's clonecoding",
  description: "it's cloncoding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <noscript>
          <div>
            죄송합니다. 에어비앤비 웹사이트의 일부는 자바스크립트가 활성화되어
            있지 않으면 제대로 작동하지 않습니다.
          </div>
        </noscript>
      </head>
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
