import { Counter } from '../entities/counter.entity';
import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../repository/couter-repository.interface';

export interface GetAllCounterUsecase extends Usecase<Counter[]> {
  execute(): Counter[]
}

export class GetAllCounter implements GetAllCounterUsecase {
  constructor(private counterRepository: CounterRepository) {}

  execute(): Counter[] {
    return this.counterRepository.getAllCounters();
  }
}
