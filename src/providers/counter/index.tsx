import {
  createContext, ReactNode, useContext, useMemo,
} from 'react';

import * as di from '../../di/src';
import * as presentation from '../../presentation/src/services';
import * as core from '../../core/src';

type CounterContextType = {
  createCounterUsecase: core.CreateCounterUsecase
}

const CounterContext = createContext<CounterContextType | null>(null);

type Props = {
  children: ReactNode
}

function CounterProvider({ children }: Props) {
  const localStorageService = new presentation.LocalStorageServiceImpl();
  const counterFactory = new di.CounterFactory(localStorageService);

  const createCounterUsecase = counterFactory.getCreateCounterUsecase();

  const value = useMemo(() => ({
    createCounterUsecase,
  }), []);

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounter() {
  const context = useContext(CounterContext);

  if (context == null) {
    throw new Error('useCounter should be used within CounterProvider');
  }

  return context;
}

export {
  CounterProvider,
  useCounter,
};
