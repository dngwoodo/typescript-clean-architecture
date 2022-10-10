import {
  useSyncExternalStore,
} from 'react';

import * as store from '../../../store/src';
import { useCounter } from '../../../provider/src/counter';

export function useCounterStore(): [store.CounterStoreSnapshot, store.CounterStore] {
  const counterStore = useCounter();

  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      counterStore.addListener(onStoreChange);
      return () => counterStore.removeListener(onStoreChange);
    },
    () => counterStore.getSnapshot(),
  );

  return [
    snapshot,
    counterStore,
  ];
}
