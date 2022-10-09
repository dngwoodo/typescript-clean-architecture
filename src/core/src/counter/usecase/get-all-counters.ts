import { Counter } from '../entities/counter.entity';
import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../repository/couter-repository.interface';

export interface GetAllCountersUsecase extends Usecase<Counter[]> {
  execute(): Counter[]
}

export class GetAllCounters implements GetAllCountersUsecase {
  constructor(private counterRepository: CounterRepository) {}

  execute(): Counter[] {
    return this.counterRepository.getAllCounters();
  }
}
