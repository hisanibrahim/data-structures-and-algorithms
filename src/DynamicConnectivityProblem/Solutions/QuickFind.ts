import UnionFind from "../UnionFind";

class QuickFind extends UnionFind {
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
