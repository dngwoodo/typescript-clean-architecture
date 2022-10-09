import {
  createContext, ReactNode, useContext, useMemo,
} from 'react';

import * as di from '../../di/src';
import * as presentation from '../../presentation/src/services';
import * as core from '../../core/src';

type CounterContextType = {
  createCounter: core.CreateCounterUsecase,
  getAllCounter: core.GetAllCounterUsecase
}

const CounterContext = createContext<CounterContextType | null>(null);

type Props = {
  children: ReactNode
}

function CounterProvider({ children }: Props) {
  const localStorageService = new presentation.LocalStorageServiceImpl();
  const counterFactory = new di.CounterFactory(localStorageService);

  const createCounter = counterFactory.getCreateCounter();
  const getAllCounter = counterFactory.getAllCounter();

  const value = useMemo(() => ({
    createCounter,
    getAllCounter,
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
