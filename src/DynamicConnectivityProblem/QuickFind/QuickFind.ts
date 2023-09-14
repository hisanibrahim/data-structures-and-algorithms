import UnionFind from "../UnionFind/UnionFind";

class QuickFind extends UnionFind {
  public idArr: number[];
  constructor(n: number) {
    super(n);
    this.n = n;
    this.idArr = [...Array(n)].map((v: number, i: number) => i);
    // Creating an array of n length which contains value same as index
  }
  public connected(p: number, q: number): boolean {
    return this.idArr[p] === this.idArr[q];
    // If both IDs are same, it means both connected
  }
}

export = QuickFind;
