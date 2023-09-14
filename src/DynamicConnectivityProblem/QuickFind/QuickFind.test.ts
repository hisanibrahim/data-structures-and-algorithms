import { assert, expect } from "chai";
import QuickFind from "./QuickFind";

describe("QuickFind class tests", () => {
  const qf = new QuickFind(10);
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  it("Should create an instance of QuickFind", () => {
    assert(qf instanceof QuickFind);
  });
  it("Should ID Array to have all members", () => {
    expect(qf.idArr).to.have.all.members(testArr);
  });
  it("Should 0 and 9 not connected", () => {
    expect(qf.connected(0, 9)).to.be.false;
  });
});
