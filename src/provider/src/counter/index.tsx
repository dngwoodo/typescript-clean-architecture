import { createContext, ReactNode, useContext } from 'react';

import * as store from '../../../store/src';

const CounterContext = createContext<store.CounterStore | null>(null);

type Props = {
  children: ReactNode
  store: store.CounterStore,
};

export function CounterProvider({ children, store: tempStore }: Props) {
  return (
    <CounterContext.Provider value={tempStore}>
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
