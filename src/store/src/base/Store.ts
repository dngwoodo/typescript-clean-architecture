export default abstract class Store<Snapshot> {
  listeners = new Set<() => void>();

  snapshot = {} as Snapshot;

  // listener 에는 onChangeStore 가 들어간다.
  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  // onChangeStore 들 실행
  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
