export class State {
  private state: Record<string, unknown>;

  constructor(initState: Record<string, unknown>) {
    this.state = initState;
  }

  get<T>(key: string): T {
    return this.state[key] as T;
  }

  set<T>(key: string, value: T): T {
    this.state[key] = value;
    return this.state[key] as T;
  }
}
