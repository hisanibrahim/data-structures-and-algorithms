class UnionFind {
  protected N: number;
  constructor(N: number) {
    this.N = N;
  }
  public union(p: number, q: number): void {}
  public connected(p: number, q: number): boolean {
    return false;
  }
}

export = UnionFind;
