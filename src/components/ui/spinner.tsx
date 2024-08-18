'use client'; // Ensure this is a client component if it uses client-side features

import React from 'react';

// Optional: Define props if you need customization (e.g., size, color)
interface SpinnerProps {
  size?: number; // Size of the spinner
  color?: string; // Color of the spinner
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
      </svg>
    </div>
  );
};

export default Spinner;
