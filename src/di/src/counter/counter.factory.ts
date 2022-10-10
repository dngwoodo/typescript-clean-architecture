import * as data from '../../../data/src';
import * as core from '../../../core/src';

export interface ICounterFactory {
  getCreateCounter(): core.CreateCounterUsecase
  getAllCounter(): core.GetAllCountersUsecase
  getIncrementCounter(): core.IncrementCounterUsecase
}

export class CounterFactory {
  private readonly counterRepository: core.CounterRepository;

  constructor(private localStorageService: data.LocalStorageService) {
    // 의존 관계 주입
    // local data source
    this.counterRepository = new data.CounterRepositoryImpl(this.localStorageService);
  }

  getCreateCounter(): core.CreateCounterUsecase {
    // 의존 관계 주입
    // repository
    return new core.CreateCounter(this.counterRepository);
  }

  getAllCounter(): core.GetAllCountersUsecase {
    return new core.GetAllCounters(this.counterRepository);
  }

  getIncrementCounter(): core.IncrementCounter {
    return new core.IncrementCounter(this.counterRepository);
  }
}
