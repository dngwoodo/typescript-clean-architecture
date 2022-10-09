export interface Usecase<T> {
  // eslint-disable-next-line no-unused-vars
  execute(...args: any[]): T
}
