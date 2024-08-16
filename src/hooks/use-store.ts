import { useState, useEffect } from 'react';
import { useStore as useZustandStore } from 'zustand';

export const useStore = <T, F>(
  store: (callback: (state: T) => F) => F,
  callback: (state: T) => F,
): F | undefined => {
  // Access the store state using Zustand's useStore or similar method
  const [data, setData] = useState<F>();

  useEffect(() => {
    // Create a function to update state with the store's state
    const updateData = () => {
      const result = store(callback);
      setData(result);
    };

    // Update data initially
    updateData();

    // Optionally, if the store provides a subscription method
    // Add logic here to subscribe to store updates if needed

    return () => {
      // Cleanup logic if needed
    };
  }, [store, callback]); // Dependencies are store and callback

  return data;
};
