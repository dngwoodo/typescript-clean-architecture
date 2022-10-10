import { createContext, ReactNode, useContext } from 'react';

import { CounterStore } from '../../../store/src';

const CounterContext = createContext<CounterStore | null>(null);

type Props = {
  children: ReactNode
  store: CounterStore,
};

export function CounterProvider({ children, store }: Props) {
  return (
    <CounterContext.Provider value={store}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (context == null) {
    throw new Error('CounterProvider 를 확인해주세요.');
  }

  return context;
}
