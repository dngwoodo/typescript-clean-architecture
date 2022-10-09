import { Counter } from '../entities/counter.entity';

export interface CounterRepository {
  createCounter(counterInfo: Counter): Counter;

  getAllCounters(): Counter[];

  updateCounter(counter: Counter): void;
}
