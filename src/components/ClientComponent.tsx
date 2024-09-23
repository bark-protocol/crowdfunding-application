'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ClientComponentProps {
  initialCount?: number;
}

export function ClientComponent({ initialCount = 0 }: ClientComponentProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // This effect demonstrates that this is a client-side component
    console.log('ClientComponent mounted');
    return () => console.log('ClientComponent unmounted');
  }, []);

  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Client-side Component</h2>
      <p className="mb-4">Count: {count}</p>
      <Button onClick={() => setCount(prev => prev + 1)}>Increment</Button>
    </div>
  );
}