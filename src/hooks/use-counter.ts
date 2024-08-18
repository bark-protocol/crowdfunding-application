import { useCounterStore } from '@/store/counterStore';

export const useCustomCounter = () => {
  // Access the store state and actions using Zustand's `useStore`
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return { count, increase, decrease };
};
