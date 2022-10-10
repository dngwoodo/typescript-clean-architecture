import * as store from '../../../store/src';

import { CounterItem } from './CounterItem';

export function CounterList() {
  const [snapshot, counterStore] = store.useCounterStore();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          counterStore.createCounter();
        }}
      >
        counter 생성
      </button>
      <ul>
        {
        snapshot.counters.map((counter) => (
          <CounterItem
            key={counter.id}
            counter={counter}
          />
        ))
      }
      </ul>
    </>
  );
}
