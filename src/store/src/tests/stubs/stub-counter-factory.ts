import { ICounterFactory } from '../../../../di/src';
import {
  CounterRepository,
  CreateCounterUsecase,
  GetAllCountersUsecase,
  IncrementCounterUsecase,
} from '../../../../core/src';
import { StubGetAllCounter } from './stub-get-all-counter';
import { StubCreateCounter } from './stub-create-counter';
import { StubIncrementCounter } from './stub-increment-counter';

export class StubCounterFactory implements ICounterFactory {
  constructor(private counterRepository: CounterRepository) {
  }

  getAllCounter(): GetAllCountersUsecase {
    return new StubGetAllCounter(this.counterRepository);
  }

  getCreateCounter(): CreateCounterUsecase {
    return new StubCreateCounter(this.counterRepository);
  }

  getIncrementCounter(): IncrementCounterUsecase {
    return new StubIncrementCounter(this.counterRepository);
  }
}
