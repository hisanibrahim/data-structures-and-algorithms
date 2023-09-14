class UnionFind {
  protected n: number;
  constructor(n: number) {
    this.n = n;
  }
  public union(p: number, q: number): void {}
  public connected(p: number, q: number): boolean {
    return false;
  }
}

export = UnionFind;
