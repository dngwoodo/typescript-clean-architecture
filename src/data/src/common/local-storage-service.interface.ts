export interface LocalStorageService {
  get(key: string): string;

  set(key: string, value: string): void;
}
