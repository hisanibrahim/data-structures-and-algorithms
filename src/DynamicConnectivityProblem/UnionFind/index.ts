class UnionFind {
  public N: number;
  public id: number[];
  constructor(N: number) {
    this.N = N;
    this.id = [...Array(N)].map((v: number, i: number) => i);
    // Creating an array of N length which contains value same as index
  }
  public union(p: number, q: number): void {}
  public connected(p: number, q: number): boolean {
    return false;
  }
}

export = UnionFind;
