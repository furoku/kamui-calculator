import ErrorBoundary from '../components/ErrorBoundary';
import ClientCalculator from '../components/ClientCalculator';

export default function Home() {
  return (
    <ErrorBoundary>
      <main 
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100"
      >
        <h1 className="text-4xl font-bold mb-8">Kamui Calculator</h1>
        <ClientCalculator />
      </main>
    </ErrorBoundary>
  );
}
