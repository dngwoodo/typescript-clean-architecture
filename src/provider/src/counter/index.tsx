import { createContext, ReactNode, useContext } from 'react';

import { CounterStore, CounterStoreSnapshot } from '../../../store/src';
import Store from '../../../store/src/base/Store';

const CounterContext = createContext<Store<CounterStoreSnapshot> | null>(null);

type Props = {
  children: ReactNode
  store: Store<CounterStoreSnapshot>,
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
