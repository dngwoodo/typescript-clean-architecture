import { ReactNode } from 'react';
import { CounterProvider } from './counter';

type Props = {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <CounterProvider>
      {children}
    </CounterProvider>
  );
}
