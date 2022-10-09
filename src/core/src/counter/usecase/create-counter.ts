import { Counter } from '../entities/counter.entity';
import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../repository/couter-repository.interface';

export interface CreateCounterUsecase extends Usecase<Counter> {
  execute(...args: any[]): Counter;
}

export class CreateCounter implements CreateCounterUsecase {
  constructor(private counterRepository: CounterRepository) {
  }

  execute(): Counter {
    return this.counterRepository.createCounter({
      id: Math.random().toString().substring(2),
      currentCount: 0,
      decrementAmount: 1,
      incrementAmount: 1,
      label: 'New Counter',
    });
  }
}
