import UnionFind from "../UnionFind";

class QuickFind extends UnionFind {
  public connected(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
    // If both IDs are same, it means both connected
  }
  public union(p: number, q: number): void {
    this.id = this.id.map((x) => {
      return x === this.id[p] ? this.id[q] : x;
      // Look through each item in the ID Array
      // If item equals to the ID of first argument, then replaces with ID of second argument
      // Else it remains same
    });
  }
}

export = QuickFind;
