import { useState } from 'react';
import { useCounter } from '../../../providers/counter';
import { Counter } from '../../../core/src';

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
          <div>
            <p>{counter.currentCount}</p>
            <button type="button">증가</button>
            <button type="button">감소</button>
          </div>
        ))
      }
    </>
  );
}
