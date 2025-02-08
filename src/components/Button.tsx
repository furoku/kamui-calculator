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
    rounded-xl 
    transition-all 
    duration-150 
    transform 
    relative
    overflow-hidden
    shadow-lg
    before:absolute
    before:inset-0
    before:bg-gradient-to-br
    before:from-white/50
    before:to-transparent
    before:opacity-50
    after:absolute
    after:inset-0
    after:bg-gradient-to-br
    after:from-transparent
    after:to-black/20
    hover:-translate-y-1
    active:translate-y-0
    hover:shadow-xl
    active:shadow-md
    ${orbitron.className}
  `;

  const defaultClasses = `
    bg-gradient-to-br from-gray-100 to-gray-300
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