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
  return (
    <button
      className={`w-16 h-16 text-xl rounded-xl transition-all duration-150 
        transform active:scale-95 hover:-translate-y-0.5 active:translate-y-0
        ${orbitron.className}
        ${className || 'bg-gray-200 hover:bg-gray-300'}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button; 