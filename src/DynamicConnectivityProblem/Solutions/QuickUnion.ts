import UnionFind from "../UnionFind";

class QuickUnion extends UnionFind {
  private root(i: number): number {
    let j = i;
    while (this.id[j] != j) {
      j = this.id[j];
    }
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
    // Set its root as root of q
  }
}

export = QuickUnion;
