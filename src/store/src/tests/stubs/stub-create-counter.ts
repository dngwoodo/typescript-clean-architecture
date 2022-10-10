import { Counter, CounterRepository, CreateCounterUsecase } from '../../../../core/src';
import { buildCounter } from '../../../../test/data/counter/buildCounter';

export const newCounter = buildCounter();

export class StubCreateCounter implements CreateCounterUsecase {
  constructor(private counterRepository: CounterRepository) {
  }

  execute(): Counter {
    return this.counterRepository.createCounter(newCounter);
  }
}
