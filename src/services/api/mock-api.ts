/** Transport-shaped adapter: service calls resemble real HTTP while data remains local. */
const latency = 260;
export const mockApi = {
  get: <T,>(_endpoint: string, resolve: () => T) => new Promise<T>((done) => setTimeout(() => done(resolve()), latency)),
  post: <T,>(_endpoint: string, _body: unknown, resolve: () => T) => new Promise<T>((done) => setTimeout(() => done(resolve()), latency)),
  patch: <T,>(_endpoint: string, _body: unknown, resolve: () => T) => new Promise<T>((done) => setTimeout(() => done(resolve()), latency)),
};
