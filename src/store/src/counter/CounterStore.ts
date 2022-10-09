import Store from '../base/Store';
import * as di from '../../../di/src';
import * as core from '../../../core/src';

export type CounterStoreSnapshot = {
  counters: core.Counter[]
}

export class CounterStore extends Store<CounterStoreSnapshot> {
  constructor(private counterFactory: di.CounterFactory) {
    super();
    this.counterFactory = counterFactory;
    this.takeSnapshot();
  }

  createCounter() {
    const createCounter = this.counterFactory.getCreateCounter();
    createCounter.execute();
    this.update();
  }

  incrementCounter(counterInfo: core.Counter) {
    const incrementCounter = this.counterFactory.getIncrementCounter();
    incrementCounter.execute(counterInfo);
    this.update();
  }

  private update() {
    // 상태 업데이트
    this.takeSnapshot();
    // 반영
    this.publish();
  }

  private takeSnapshot() {
    const getAllCounter = this.counterFactory.getAllCounter();
    this.snapshot = { counters: getAllCounter.execute() };
  }
}
