import type { Metadata } from "next";
import { Inter, DotGothic16, Yuji_Syuku } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const yujiSyuku = Yuji_Syuku({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamui Calculator",
  description: "A simple calculator application",
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
