import { describe, it, expect } from 'vitest';

import { CounterRepositoryImpl } from '../../counter';

import { buildCounter } from '../fixtures/buildCounter';
import { StubLocalStorageService } from '../stubs/stub-local-storage-service';

describe('CounterRepository', () => {
  function getCounterRepositoryInstance() {
    return new CounterRepositoryImpl(new StubLocalStorageService());
  }

  describe('createCounter', () => {
    it('counter 를 생성한다.', () => {
      const newCounter = buildCounter();
      const counterRepository = getCounterRepositoryInstance();

      expect(counterRepository.createCounter(newCounter)).toEqual(newCounter);
      expect(counterRepository.getAllCounters()).toHaveLength(1);
      expect(counterRepository.getAllCounters()[0]).toEqual(newCounter);
    });
  });

  describe('getAllCounters', () => {
    it('모든 counter 들을 반환한다.', () => {
      const newCounter = buildCounter();
      const counterRepository = getCounterRepositoryInstance();
      counterRepository.createCounter(newCounter);

      expect(counterRepository.getAllCounters()).toHaveLength(1);
      expect(counterRepository.getAllCounters()[0]).toEqual(newCounter);
    });
  });
});
