import { describe, expect, it } from 'vitest';
import { CreateCounter, IncrementCounter } from '../../../counter';
import { StubCounterRepository } from '../../stubs/stub-counter-repository';

describe('IncrementCounterUsecase', () => {
  describe('execute', () => {
    it('counter 의 currentCount 를 incrementAmount 만큼 증가시킨다.', () => {
      const stubCounterRepository = new StubCounterRepository();
      const incrementCounterUsecase = new IncrementCounter(stubCounterRepository);
      const createCounterUsecase = new CreateCounter(stubCounterRepository);
      const counter = createCounterUsecase.execute();
      const prevCurrentCount = counter.currentCount;

      incrementCounterUsecase.execute(counter);

      expect(
        stubCounterRepository.counters[0].currentCount,
      ).toBe(prevCurrentCount + counter.incrementAmount);
    });
  });
});
