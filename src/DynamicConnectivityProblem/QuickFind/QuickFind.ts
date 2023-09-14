import UnionFind from "../UnionFind/UnionFind";

class QuickFind extends UnionFind {
  public idArr: number[];
  constructor(N: number) {
    super(N);
    this.N = N;
    this.idArr = [...Array(N)].map((v: number, i: number) => i);
    // Creating an array of N length which contains value same as index
  }
  public connected(p: number, q: number): boolean {
    return this.idArr[p] === this.idArr[q];
    // If both IDs are same, it means both connected
  }
  public union(p: number, q: number): void {
    if (!(p < this.N && q < this.N)) console.log("Out of bound Error");
    else
      this.idArr = this.idArr.map((x) => {
        return x === this.idArr[p] ? this.idArr[q] : x;
        // Look through each item in the ID Array
        // If item equals to the ID of first argument, then replaces with ID of second argument
        // Else it remains same
      });
  }
}

export = QuickFind;
