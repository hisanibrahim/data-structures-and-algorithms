import { assert } from "chai";
import UnionFind from "./UnionFind";

describe("UnionFind class tests", () => {
  it("Should create an instance of UnionFind", () => {
    const uf = new UnionFind(10);
    assert(uf instanceof UnionFind);
  });
});
