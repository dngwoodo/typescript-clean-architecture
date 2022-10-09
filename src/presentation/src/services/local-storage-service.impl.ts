import * as di from '../../../di/src';

export class LocalStorageServiceImpl implements di.LocalStorageService {
  get(key: string): string {
    const result = window.localStorage.getItem(key);

    if (result == null) {
      throw new Error(`${key}를 찾을 수 없습니다.`);
    }

    return result;
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}
