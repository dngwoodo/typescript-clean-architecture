import { Counter, CounterRepository, IncrementCounterUsecase } from '../../../../core/src';

export class StubIncrementCounter implements IncrementCounterUsecase {
  constructor(private counterRepository: CounterRepository) {
  }

  execute(counter: Counter): void {
    this.counterRepository.updateCounter({
      ...counter,
      currentCount: counter.currentCount + counter.incrementAmount,
    });
  }
}
