import { assert, expect } from "chai";
import QuickFind from "./QuickFind";
import QuickUnion from "./QuickUnion";
import QuickUnionImproved from "./QuickUnionImproved";

[QuickFind, QuickUnion, QuickUnionImproved].forEach((Class) => {
  const start = global.performance.now();
  describe(`${Class.name} class tests`, () => {
    const qf = new Class(10);
    const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    it(`Should create an instance of ${Class.name}`, () => {
      assert(qf instanceof Class);
    });
    it("Should ID Array to have all members", () => {
      expect(qf.id).to.have.all.members(testArr);
    });
    it("Should 4 and 3 not connected", () => {
      expect(qf.connected(4, 3)).to.be.false;
    });
    it("Should connect 4 and 3", () => {
      qf.union(4, 3);
      expect(qf.connected(4, 3)).to.be.true;
    });
    it("Should connect (3, 8) (6, 5) (9, 4) (2, 1) (5, 0) (7, 2) (6, 1) (7, 3) (9, 1)", () => {
      qf.union(3, 8);
      qf.union(6, 5);
      qf.union(9, 4);
      qf.union(2, 1);
      qf.union(5, 0);
      qf.union(7, 2);
      qf.union(6, 1);
      qf.union(7, 3);
      qf.union(9, 1);
      expect(qf.connected(3, 8)).to.be.true;
      expect(qf.connected(6, 5)).to.be.true;
      expect(qf.connected(9, 4)).to.be.true;
      expect(qf.connected(2, 1)).to.be.true;
      expect(qf.connected(5, 0)).to.be.true;
      expect(qf.connected(7, 2)).to.be.true;
      expect(qf.connected(6, 1)).to.be.true;
      expect(qf.connected(7, 3)).to.be.true;
      expect(qf.connected(9, 1)).to.be.true;
    });
  });
  const timeTaken = global.performance.now() - start;
  console.log(timeTaken);
});
