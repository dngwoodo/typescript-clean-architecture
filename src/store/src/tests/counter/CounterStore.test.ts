import {
  describe, expect, it, vitest,
} from 'vitest';

import { CounterStore } from '../../counter/CounterStore';
import { StubCounterRepository } from '../../../../core/src/tests/stubs/stub-counter-repository';
import { StubCounterFactory } from '../stubs/stub-counter-factory';
import { newCounter } from '../stubs/stub-create-counter';

describe('CounterStore', () => {
  const onStoreChangeMock = vitest.fn();

  function getInstanceCounterStore() {
    const counterFactory = new StubCounterFactory(new StubCounterRepository());
    return new CounterStore(counterFactory);
  }

  describe('createCounter', () => {
    it('counter 를 생성한다.', () => {
      const counterStore = getInstanceCounterStore();

      counterStore.addListener(onStoreChangeMock);
      counterStore.createCounter();

      expect(onStoreChangeMock).toBeCalled();
      expect(counterStore.getSnapshot().counters[0]).toEqual(newCounter);
    });
  });

  describe('incrementCounter', () => {
    it('counter 의 currentCount 를 incrementAmount 만큼 증가시킨다.', () => {
      const counterStore = getInstanceCounterStore();
      counterStore.createCounter();

      counterStore.addListener(onStoreChangeMock);
      counterStore.incrementCounter(newCounter);

      expect(onStoreChangeMock).toBeCalled();
      expect(counterStore.getSnapshot().counters[0]).toEqual({
        ...newCounter,
        currentCount: newCounter.currentCount + newCounter.incrementAmount,
      });
    });
  });
});
