import { Counter } from '../entities/counter.entity';
import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../repository/couter-repository.interface';

export interface IncrementCounterUsecase extends Usecase<void> {
  execute(counter: Counter): void;
}

export class IncrementCounter implements IncrementCounterUsecase {
  constructor(private counterRepository: CounterRepository) {
  }

  execute(counter: Counter): void {
    this.counterRepository.updateCounter({
      ...counter,
      currentCount: counter.currentCount + counter.incrementAmount,
    });
  }
}
