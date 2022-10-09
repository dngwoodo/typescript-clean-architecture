import { Counter, CounterRepository } from '../../counter';

export class StubCounterRepository implements CounterRepository {
  private _counters: Counter[] = [];

  get counters(): Counter[] {
    // eslint-disable-next-line no-underscore-dangle
    return this._counters;
  }

  createCounter(counterInfo: Counter): Counter {
    this.counters.push(counterInfo);
    return counterInfo;
  }

  getAllCounters(): Counter[] {
    return this.counters;
  }

  updateCounter(counter: Counter): void {
  }
}
