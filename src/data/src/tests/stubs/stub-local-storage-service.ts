import { LocalStorageService } from '../../common';

export class StubLocalStorageService implements LocalStorageService {
  private storage = {} as any;

  get(key: string) {
    return this.storage[key];
  }

  set(key: string, value: string) {
    this.storage[key] = value;
  }
}
