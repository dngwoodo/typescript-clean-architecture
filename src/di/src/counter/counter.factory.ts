import * as data from '../../../data/src';
import * as core from '../../../core/src';

export class CounterFactory {
  private readonly counterRepository: core.CounterRepository;

  constructor(private localStorageService: data.LocalStorageService) {
    // 의존 관계 주입
    // local data source
    this.counterRepository = new data.CounterRepositoryImpl(this.localStorageService);
  }

  getCreateCounterUsecase(): core.CreateCounterUsecase {
    // 의존 관계 주입
    // repository
    return new core.CreateCounterUsecase(this.counterRepository);
  }
}
