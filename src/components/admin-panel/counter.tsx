import React from 'react';
import { useCustomCounter } from '@/hooks/use-counter';

const Counter: React.FC = () => {
  const { count, increase, decrease } = useCustomCounter();

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Counter</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={increase}
          className="px-4 py-2 bg-black-500 text-white rounded hover:bg-black-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
