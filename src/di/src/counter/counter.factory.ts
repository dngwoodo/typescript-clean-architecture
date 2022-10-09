import * as data from '../../../data/src';
import * as core from '../../../core/src';

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

  getAllCounter(): core.GetAllCounterUsecase {
    return new core.GetAllCounter(this.counterRepository);
  }
}
