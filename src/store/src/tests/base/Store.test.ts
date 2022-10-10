import {
  test, expect, vitest,
} from 'vitest';

import { StubCounterFactory } from '../stubs/stub-counter-factory';
import { StubCounterRepository } from '../../../../core/src/tests/stubs/stub-counter-repository';
import { CounterStore } from '../../counter/CounterStore';
import { newCounter } from '../stubs/stub-create-counter';

test('Store', () => {
  const onStoreChangeMock = vitest.fn();
  const counterFactory = new StubCounterFactory(new StubCounterRepository());
  const counterStore = new CounterStore(counterFactory);

  counterStore.addListener(onStoreChangeMock);
  counterStore.createCounter();

  expect(onStoreChangeMock).toBeCalledTimes(1);
  expect(counterStore.getSnapshot().counters[0]).toEqual(newCounter);

  counterStore.removeListener(onStoreChangeMock);

  expect(onStoreChangeMock).toBeCalledTimes(1);
});

// describe('Store', () => {
//   describe('addListener', () => {
//     it('', () => {});
//   });
//
//   describe('removeListener', () => {
//     it('', () => {});
//   });
//
//   describe('getSnapshot', () => {
//     it('', () => {});
//   });
//
//   describe('removeListener', () => {
//     it('', () => {});
//   });
//
//   describe('publish', () => {
//     it('', () => {});
//   });
// });
