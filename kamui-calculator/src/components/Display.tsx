'use client';

import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

interface DisplayProps {
  value: string;
  error?: string;
}

const Display: React.FC<DisplayProps> = ({ value, error }) => {
  return (
    <div className="relative w-full h-24 rounded-lg mb-4 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.1)]">
      {/* プラスチック光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* エッジライト効果 */}
      <div className="absolute inset-0 border border-white/5 rounded-lg" />
      <div className="absolute inset-[1px] border border-black/20 rounded-lg" />

      {/* アニメーションするドットパターン */}
      <div className="absolute inset-0 opacity-80">
        {/* 1列目 */}
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping" 
          style={{ top: '10%', left: '5%', animationDuration: '2s' }} />
        <div className="absolute w-1.5 h-1.5 bg-green-300 rounded-full animate-ping" 
          style={{ top: '30%', left: '15%', animationDelay: '0.3s', animationDuration: '1.8s' }} />
        <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" 
          style={{ top: '50%', left: '8%', animationDelay: '0.6s', animationDuration: '2.2s' }} />

        {/* 2列目 */}
        <div className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" 
          style={{ top: '15%', left: '25%', animationDelay: '0.2s', animationDuration: '1.9s' }} />
        <div className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-ping" 
          style={{ top: '45%', left: '35%', animationDelay: '0.7s', animationDuration: '2.1s' }} />
        <div className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full animate-ping" 
          style={{ top: '75%', left: '30%', animationDelay: '1.1s', animationDuration: '2s' }} />

        {/* 3列目 */}
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-ping" 
          style={{ top: '20%', left: '55%', animationDelay: '0.4s', animationDuration: '2.3s' }} />
        <div className="absolute w-1.5 h-1.5 bg-green-200 rounded-full animate-ping" 
          style={{ top: '50%', left: '60%', animationDelay: '0.8s', animationDuration: '1.7s' }} />
        <div className="absolute w-2 h-2 bg-purple-200 rounded-full animate-ping" 
          style={{ top: '80%', left: '50%', animationDelay: '1.3s', animationDuration: '2.4s' }} />

        {/* 4列目 */}
        <div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full animate-ping" 
          style={{ top: '25%', left: '75%', animationDelay: '0.5s', animationDuration: '2.2s' }} />
        <div className="absolute w-2 h-2 bg-red-300 rounded-full animate-ping" 
          style={{ top: '55%', left: '80%', animationDelay: '1.0s', animationDuration: '1.8s' }} />
        <div className="absolute w-1.5 h-1.5 bg-pink-200 rounded-full animate-ping" 
          style={{ top: '85%', left: '85%', animationDelay: '1.4s', animationDuration: '2.1s' }} />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex flex-col justify-center text-right p-4">
        {error ? (
          <div className="text-red-500 text-sm mb-1">{error}</div>
        ) : null}
        <div className={`${orbitron.className} text-4xl overflow-x-auto whitespace-nowrap scrollbar-hide tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`}>
          {value || '0'}
        </div>
      </div>
    </div>
  );
};

export default Display; 