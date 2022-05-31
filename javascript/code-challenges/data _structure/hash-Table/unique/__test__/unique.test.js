const {uniqueChar} = require('../unique');
const {mostCommonWord} = require('../unique');
describe("unique string Test", () => {
  it("check string", () => {
    let text = "The quick brown fox jumps over the lazy dog";
    let test = uniqueChar(text);
    expect(test).toBe(false);
  });
  it("check string", () => {
    let text = "I love cats";
    let test = uniqueChar(text);
    expect(test).toBe(true);
  });
  it("check string", () => {
    let text = "Donald the duck	";
    let test = uniqueChar(text);
    expect(test).toBe(false);
  });
});

describe("mostCommonWord", () => {
    it("check string", () => {
      let text = "In a galaxy far far away";
      let test = mostCommonWord(text);
      expect(test).toEqual("far");
    });
    it("check string", () => {
      let text = "Taco cat ate a taco";
      let test = mostCommonWord(text);
      expect(test).toBe("taco");
    });
    it("check string", () => {
      let text = "No. Try not. Do or do not. There is no try.";
      let test = mostCommonWord(text);
      expect(test).toBe("no");
    });
  });