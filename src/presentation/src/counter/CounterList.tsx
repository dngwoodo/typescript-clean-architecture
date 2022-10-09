import { useState } from 'react';
import { useCounter } from '../../../providers/counter';
import { Counter } from '../../../core/src';

function CounterItem({ counter }:{ counter: Counter }) {
  const {
    incrementCounter,
  } = useCounter();
  // const [_, setCount] = useState<Counter['currentCount']>(counter.currentCount);

  return (
    <div>
      <p>{counter.currentCount}</p>
      <button
        type="button"
        onClick={() => {
          incrementCounter.execute(counter);
          // setCount(counter.currentCount);
        }}
      >
        증가
      </button>
      <button type="button">감소</button>
    </div>
  );
}

export function CounterList() {
  const {
    createCounter,
    getAllCounter,
  } = useCounter();
  const [_, setCounters] = useState<Counter[]>([]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          const newCounter = createCounter.execute();
          setCounters((prev) => ([...prev, newCounter]));
        }}
      >
        counter 생성
      </button>
      {
        getAllCounter.execute().map((counter) => (
          <CounterItem
            key={counter.id}
            counter={counter}
          />
        ))
      }
    </>
  );
}
