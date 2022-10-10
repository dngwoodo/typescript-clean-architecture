import * as core from '../../../../core/src';
import * as store from '../../../../store/src';
import { buildCounter } from '../../../../test/data/counter/buildCounter';
import { StubCounterFactory } from '../../../../store/src/tests/stubs/stub-counter-factory';
import { StubCounterRepository } from '../../../../core/src/tests/stubs/stub-counter-repository';

export class StubCounterStore extends store.CounterStore {
  snapshot = { counters: [] } as { counters: core.Counter[] };

  constructor(counters: core.Counter[] = []) {
    super(new StubCounterFactory(new StubCounterRepository()));
    this.snapshot.counters = counters;
  }

  createCounter() {
    this.snapshot.counters.push(buildCounter());
  }

  // TODO: 피드백 필요
  incrementCounter(counterInfo: core.Counter) {
    this.snapshot.counters.push(counterInfo);
  }
}
