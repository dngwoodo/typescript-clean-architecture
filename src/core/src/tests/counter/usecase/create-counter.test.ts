import { describe, expect, it } from 'vitest';
import { CreateCounter, CreateCounterUsecase } from '../../../counter';
import { StubCounterRepository } from '../../stubs/stub-counter.repository';

describe('CreateCounterUsecase', () => {
  describe('execute', () => {
    it('counter 를 생성한다.', () => {
      const stubCounterRepository = new StubCounterRepository();
      const createCounterUsecase = new CreateCounter(stubCounterRepository);

      expect(createCounterUsecase.execute()).toEqual(stubCounterRepository.counters[0]);
    });
  });
});
