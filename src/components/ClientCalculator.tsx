'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';

interface Bubble {
  id: number;
  size: number;
  color: string;
  duration: number;
  left: number;
  top: number;
  tx1: number;
  ty1: number;
  tx2: number;
  ty2: number;
  tx3: number;
  ty3: number;
}

const COLORS = [
  'bg-pink-400/70',
  'bg-purple-400/70',
  'bg-blue-400/70',
  'bg-teal-400/70',
  'bg-cyan-400/70',
  'bg-indigo-400/70',
  'bg-rose-400/70',
  'bg-violet-400/70',
  'bg-sky-400/70',
  'bg-emerald-400/70',
  'bg-fuchsia-400/70',
  'bg-amber-400/70'
];

// ボタンのスタイル定義を更新
const operatorButtonClass = `
  bg-gradient-to-br from-orange-300 to-orange-500
  text-white
  hover:from-orange-400 hover:to-orange-600
  active:from-orange-500 active:to-orange-700
`;

const equalsButtonClass = `
  bg-gradient-to-br from-blue-400 to-blue-600
  text-white
  hover:from-blue-500 hover:to-blue-700
  active:from-blue-600 active:to-blue-800
`;

const clearButtonClass = `
  col-span-4
  bg-gradient-to-br from-red-400 to-red-600
  text-white
  hover:from-red-500 hover:to-red-700
  active:from-red-600 active:to-red-800
`;

export default function ClientCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [nextId, setNextId] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 20 + 10; // 10px から 30px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 4000 + 3000; // 3-7秒
      
      // ランダムな移動距離を生成（-30px から 30px）
      const randomTranslate = () => Math.random() * 60 - 30;
      
      const newBubble: Bubble = {
        id: nextId,
        size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration,
        left,
        top,
        tx1: randomTranslate(),
        ty1: randomTranslate(),
        tx2: randomTranslate(),
        ty2: randomTranslate(),
        tx3: randomTranslate(),
        ty3: randomTranslate(),
      };

      setBubbles(prev => [...prev, newBubble]);
      setNextId(prev => prev + 1);

      // アニメーション終了後に泡を削除
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
      }, duration);
    };

    // 250ms ごとに新しい泡を生成
    const interval = setInterval(createBubble, 250);
    return () => clearInterval(interval);
  }, [nextId]);

  const handleNumber = (value: string) => {
    if (shouldResetDisplay) {
      setDisplay(value);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const handleOperator = (operator: string) => {
    if (display) {
      setEquation(display + operator);
      setShouldResetDisplay(true);
    }
  };

  const handleEquals = () => {
    if (display && equation) {
      try {
        // evalの代わりに、Function constructorを使用してより安全な実装に
        const calculateResult = new Function('return ' + equation + display);
        const result = calculateResult();
        
        if (typeof result !== 'number' || !isFinite(result)) {
          throw new Error('Invalid calculation');
        }
        
        // 小数点以下8桁までに制限
        const formattedResult = Number(result.toFixed(8)).toString();
        setDisplay(formattedResult);
        setEquation('');
      } catch (error) {
        setError('Error');
      }
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  return (
    <div className="relative w-[380px] p-7 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      {/* 背景の光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent" />
      
      {/* エッジライト効果 */}
      <div className="absolute inset-0 border border-white/30 rounded-2xl" />
      <div className="absolute inset-[1px] border border-black/5 rounded-2xl" />

      {/* シャドウ効果 */}
      <div className="absolute inset-0 shadow-[0_0_50px_rgba(0,0,0,0.1)] rounded-2xl" />

      {/* バブルアニメーション背景 */}
      <div className="absolute inset-0">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className={`absolute rounded-full blur-md ${bubble.color}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              animation: `bubble-fade ${bubble.duration}ms ease-in-out forwards`,
              '--tx1': `${bubble.tx1}px`,
              '--ty1': `${bubble.ty1}px`,
              '--tx2': `${bubble.tx2}px`,
              '--ty2': `${bubble.ty2}px`,
              '--tx3': `${bubble.tx3}px`,
              '--ty3': `${bubble.ty3}px`,
              filter: 'brightness(1.8)'
            } as any}
          />
        ))}
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />

      {/* メインコンテンツ */}
      <div className="relative z-10">
        <Display value={equation + display} error={error} />
        <div className="grid grid-cols-4 gap-5">
          <Button value="7" onClick={handleNumber} />
          <Button value="8" onClick={handleNumber} />
          <Button value="9" onClick={handleNumber} />
          <Button value="÷" onClick={() => handleOperator('/')} className={operatorButtonClass} />
          
          <Button value="4" onClick={handleNumber} />
          <Button value="5" onClick={handleNumber} />
          <Button value="6" onClick={handleNumber} />
          <Button value="×" onClick={() => handleOperator('*')} className={operatorButtonClass} />
          
          <Button value="1" onClick={handleNumber} />
          <Button value="2" onClick={handleNumber} />
          <Button value="3" onClick={handleNumber} />
          <Button value="-" onClick={() => handleOperator('-')} className={operatorButtonClass} />
          
          <Button value="0" onClick={handleNumber} />
          <Button value="." onClick={handleNumber} />
          <Button value="=" onClick={handleEquals} className={equalsButtonClass} />
          <Button value="+" onClick={() => handleOperator('+')} className={operatorButtonClass} />
          
          <Button value="C" onClick={handleClear} className={clearButtonClass} />
        </div>
      </div>
    </div>
  );
} 