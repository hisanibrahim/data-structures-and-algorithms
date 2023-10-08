import QuickUnion from "./QuickUnion";

class QuickUnionImproved extends QuickUnion {
  // Maintain a size array to count number of objects in the tree rooted at i
  protected size: number[] = [];

  constructor(N: number) {
    super(N);
    // Initialize values of size array as 1
    for (let i = 0; i < N; i++) {
      this.size[i] = 1;
    }
  }

  protected root(i: number): number {
    let j = i;
    // Find root by iterating through parents
    // If index and value is same, then it is root
    while (this.id[j] != j) {
      j = this.id[j];

      // Improvement: Path Compressed Quick Union
      // Make every node in the path point to its grand parent
      this.id[i] = this.id[this.id[i]];
    }
    return j;
  }

  // find is identical to parent class implementation

  public union(p: number, q: number): void {
    // Find root of p
    // Set its root = root of q
    const rootP = this.root(p);
    const rootQ = this.root(q);
    if (rootP == rootQ) return;

    // Improvement: Weighted Quick Union
    // Link root of smaller tree to root of larger tree
    // Update size array

    if (this.size[rootP] < this.size[rootQ]) {
      this.id[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.id[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
  }
}

export = QuickUnionImproved;
