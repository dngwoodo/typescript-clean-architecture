import { ReactNode, useRef } from 'react';
import { CounterProvider } from './counter';
import * as di from '../../di/src';
import * as presentation from '../../presentation/src/services';
import * as store from '../../store/src';

type Props = {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  const counterStore = useRef(new store.CounterStore(
    new di.CounterFactory(
      new presentation.LocalStorageServiceImpl(),
    ),
  ));

  return (
    <CounterProvider store={counterStore.current}>
      {children}
    </CounterProvider>
  );
}
