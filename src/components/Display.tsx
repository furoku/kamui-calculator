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
    <div className="relative w-full h-24 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
      {/* プラスチック光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-30" />
      
      {/* エッジライト効果 */}
      <div className="absolute inset-0 border border-white/10 rounded-xl" />
      <div className="absolute inset-[1px] border border-black/20 rounded-xl" />

      {/* アニメーションするドットパターン */}
      <div className="absolute inset-0 opacity-80">
        {/* 1列目 */}
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-ping shadow-lg shadow-blue-400/80" 
          style={{ top: '10%', left: '5%', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-2 h-2 bg-green-300 rounded-full animate-ping shadow-lg shadow-green-400/80" 
          style={{ top: '30%', left: '15%', animationDelay: '0.3s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full animate-ping shadow-lg shadow-purple-400/80" 
          style={{ top: '50%', left: '8%', animationDelay: '0.6s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-3 h-3 bg-yellow-200 rounded-full animate-ping shadow-lg shadow-yellow-400/80" 
          style={{ top: '70%', left: '12%', animationDelay: '0.9s', filter: 'blur(1px) brightness(1.5)' }} />

        {/* 2列目 */}
        <div className="absolute w-2 h-2 bg-pink-300 rounded-full animate-ping shadow-lg shadow-pink-400/80" 
          style={{ top: '15%', left: '25%', animationDelay: '0.2s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-ping shadow-lg shadow-cyan-400/80" 
          style={{ top: '45%', left: '35%', animationDelay: '0.7s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-2 h-2 bg-indigo-300 rounded-full animate-ping shadow-lg shadow-indigo-400/80" 
          style={{ top: '75%', left: '30%', animationDelay: '1.1s', filter: 'blur(1px) brightness(1.5)' }} />

        {/* 3列目 */}
        <div className="absolute w-3 h-3 bg-blue-200 rounded-full animate-ping shadow-lg shadow-blue-400/80" 
          style={{ top: '20%', left: '55%', animationDelay: '0.4s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-2 h-2 bg-green-200 rounded-full animate-ping shadow-lg shadow-green-400/80" 
          style={{ top: '50%', left: '60%', animationDelay: '0.8s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-3 h-3 bg-purple-200 rounded-full animate-ping shadow-lg shadow-purple-400/80" 
          style={{ top: '80%', left: '50%', animationDelay: '1.3s', filter: 'blur(1px) brightness(1.5)' }} />

        {/* 4列目 */}
        <div className="absolute w-2 h-2 bg-yellow-200 rounded-full animate-ping shadow-lg shadow-yellow-400/80" 
          style={{ top: '25%', left: '75%', animationDelay: '0.5s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-3 h-3 bg-red-300 rounded-full animate-ping shadow-lg shadow-red-400/80" 
          style={{ top: '55%', left: '80%', animationDelay: '1.0s', filter: 'blur(1px) brightness(1.5)' }} />
        <div className="absolute w-2 h-2 bg-pink-200 rounded-full animate-ping shadow-lg shadow-pink-400/80" 
          style={{ top: '85%', left: '85%', animationDelay: '1.4s', filter: 'blur(1px) brightness(1.5)' }} />

        {/* 追加のアクセント */}
        <div className="absolute w-4 h-4 bg-blue-200 rounded-full animate-ping shadow-lg shadow-blue-400/80" 
          style={{ top: '40%', left: '90%', animationDelay: '1.2s', filter: 'blur(2px) brightness(1.8)' }} />
        <div className="absolute w-4 h-4 bg-purple-200 rounded-full animate-ping shadow-lg shadow-purple-400/80" 
          style={{ top: '60%', left: '2%', animationDelay: '0.1s', filter: 'blur(2px) brightness(1.8)' }} />
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex flex-col justify-center text-right p-4 transition-all duration-300">
        {error ? (
          <div className="text-red-500 text-sm mb-1">{error}</div>
        ) : null}
        <div className={`${orbitron.className} text-4xl overflow-x-auto whitespace-nowrap scrollbar-hide tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>
          {value || '0'}
        </div>
      </div>
    </div>
  );
};

export default Display; 