import { useCounter } from '../../../providers/counter';

export function Counter() {
  const {
    createCounterUsecase,
  } = useCounter();

  const newCounter = createCounterUsecase.execute();

  return (
    <div>
      {newCounter.currentCount}
    </div>
  );
}
