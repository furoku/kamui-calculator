import ErrorBoundary from '../components/ErrorBoundary';
import ClientCalculator from '../components/ClientCalculator';
import { Reggae_One } from "next/font/google";

const reggaeOne = Reggae_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'ヨクスル電卓'
};

export default function Home() {
  return (
    <ErrorBoundary>
      <main 
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('/images/G142_mokumecyou.jpg')] bg-cover bg-center relative"
      >
        <h1 className={`
          text-5xl font-bold mb-8 
          ${reggaeOne.className} 
          tracking-widest 
          relative
          px-8 py-4
          bg-gradient-to-b from-blue-400 to-blue-600
          text-transparent bg-clip-text
          after:content-['ヨクスル電卓']
          after:absolute after:left-0 after:top-0
          after:px-8 after:py-4
          after:w-full after:h-full
          after:bg-gradient-to-b after:from-gray-200 after:to-white
          after:text-transparent after:bg-clip-text
          after:translate-y-[0.15em]
          after:z-[-1]
          before:content-['ヨクスル電卓']
          before:absolute before:left-0 before:top-0
          before:px-8 before:py-4
          before:w-full before:h-full
          before:bg-gradient-to-b before:from-gray-700 before:to-gray-900
          before:text-transparent before:bg-clip-text
          before:translate-y-[0.3em]
          before:z-[-2]
          [text-shadow:0_0_30px_rgba(255,255,255,0.6)]
          hover:scale-105 transition-transform duration-300
          hover:[text-shadow:0_0_40px_rgba(255,255,255,0.8)]
          z-10
        `}>
          ヨクスル電卓
        </h1>
        <div className="relative z-10">
          <ClientCalculator />
        </div>
      </main>
    </ErrorBoundary>
  );
}
