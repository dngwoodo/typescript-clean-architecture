import {
  useSyncExternalStore,
} from 'react';

import * as di from '../../../di/src';
import * as presentation from '../../../presentation/src/services';
import * as store from '../../../store/src';

const counterStore = new store.CounterStore(
  new di.CounterFactory(
    new presentation.LocalStorageServiceImpl(),
  ),
);

export function useCounterStore(): [store.CounterStoreSnapshot, store.CounterStore] {
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
