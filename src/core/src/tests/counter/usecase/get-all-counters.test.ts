import { describe, expect, it } from 'vitest';
import { GetAllCounters } from '../../../counter';
import { StubCounterRepository } from '../../stubs/stub-counter-repository';

describe('GetAllCountersUsecase', () => {
  describe('execute', () => {
    it('모든 counter 들을 반환한다.', () => {
      const stubCounterRepository = new StubCounterRepository();
      const getAllCountersUsecase = new GetAllCounters(stubCounterRepository);

      expect(getAllCountersUsecase.execute()).toEqual(stubCounterRepository.counters);
    });
  });
});
