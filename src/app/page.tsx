import ErrorBoundary from '../components/ErrorBoundary';
import ClientCalculator from '../components/ClientCalculator';
import { Zen_Antique } from "next/font/google";

const zenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <ErrorBoundary>
      <main 
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100"
      >
        <h1 className={`text-5xl font-bold mb-8 ${zenAntique.className} tracking-widest text-gray-800`}>
          神威計算
        </h1>
        <ClientCalculator />
      </main>
    </ErrorBoundary>
  );
}
