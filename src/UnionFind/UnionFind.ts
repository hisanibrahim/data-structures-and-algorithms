abstract class UnionFind {
  public id: number[];
  constructor(N: number) {
    this.id = [];

    // Creating an array of N length which contains value same as index
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }
  abstract union(p: number, q: number): void;
  abstract connected(p: number, q: number): boolean;
}

export = UnionFind;
