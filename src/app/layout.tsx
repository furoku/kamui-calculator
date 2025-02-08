import type { Metadata } from "next";
import { Inter, Zen_Antique } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const zenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "神威計算",
  description: "アニメーションが美しい、モダンな電卓アプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
