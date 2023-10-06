class UnionFind {
  public N: number;
  public id: number[];
  constructor(N: number) {
    this.N = N;
    this.id = [];

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
    // Creating an array of N length which contains value same as index
  }
  public union(p: number, q: number): void {}
  public connected(p: number, q: number): boolean {
    return false;
  }
}

export = UnionFind;
