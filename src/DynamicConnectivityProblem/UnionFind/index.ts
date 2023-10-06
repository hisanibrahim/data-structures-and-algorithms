class UnionFind {
  public N: number;
  public idArr: number[];
  constructor(N: number) {
    this.N = N;
    this.idArr = [...Array(N)].map((v: number, i: number) => i);
    // Creating an array of N length which contains value same as index
  }
  public union(p: number, q: number): void {}
  public connected(p: number, q: number): boolean {
    return false;
  }
}

export = UnionFind;
