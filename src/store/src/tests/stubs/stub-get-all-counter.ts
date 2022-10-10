import { Counter, CounterRepository, GetAllCountersUsecase } from '../../../../core/src';

export class StubGetAllCounter implements GetAllCountersUsecase {
  constructor(private counterRepository: CounterRepository) {
  }

  execute(): Counter[] {
    return this.counterRepository.getAllCounters();
  }
}
