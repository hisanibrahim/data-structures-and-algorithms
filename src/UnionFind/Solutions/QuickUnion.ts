import UnionFind from "../UnionFind";

class QuickUnion extends UnionFind {
  protected root(i: number): number {
    let j = i;
    while (this.id[j] != j) {
      j = this.id[j];
    }
    // Find root by iterating through parents
    // If index and value is same, then it is root
    return j;
  }
  public connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
    // If root of both are same, it means both connected
  }
  public union(p: number, q: number): void {
    const rootP = this.root(p);
    const rootQ = this.root(q);
    this.id[rootP] = rootQ;
    // Find root of p
    // Set its root = root of q
  }
}

export = QuickUnion;
