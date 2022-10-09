import * as core from '../../../core/src';
import * as store from '../../../store/src';

export function CounterItem({ counter }:{ counter: core.Counter }) {
  const [_, counterStore] = store.useCounterStore();

  return (
    <div>
      <p>{counter.currentCount}</p>
      <button
        type="button"
        onClick={() => {
          counterStore.incrementCounter(counter);
        }}
      >
        증가
      </button>
      <button type="button">감소</button>
    </div>
  );
}
