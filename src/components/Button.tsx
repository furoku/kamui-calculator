'use client';

import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className }) => {
  const baseClasses = `
    w-16 h-16 
    text-xl 
    rounded-lg 
    transition-all 
    duration-100 
    transform 
    relative
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.2),inset_0_-1px_1px_rgba(0,0,0,0.1)]
    active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(0,0,0,0.2)]
    before:absolute
    before:inset-0
    before:rounded-lg
    before:bg-gradient-to-b
    before:from-white/40
    before:to-transparent
    before:opacity-100
    active:before:opacity-0
    after:absolute
    after:inset-0
    after:rounded-lg
    after:bg-gradient-to-t
    after:from-black/20
    after:to-transparent
    after:opacity-0
    active:after:opacity-100
    ring-4
    ring-gray-300/50
    ring-offset-2
    ring-offset-gray-100
    ${orbitron.className}
  `;

  const defaultClasses = `
    bg-gradient-to-b from-gray-100 to-gray-300
    text-gray-700
    hover:from-gray-200 hover:to-gray-400
    active:from-gray-300 active:to-gray-500
  `;

  return (
    <button
      className={`${baseClasses} ${className || defaultClasses}`}
      onClick={() => onClick(value)}
    >
      <span className="relative z-10">{value}</span>
    </button>
  );
};

export default Button; 