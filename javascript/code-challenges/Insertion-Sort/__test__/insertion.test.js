"use strict";

const insertion_Sort = require("../Insertion-Sort");
let arr_1 = [8, 4, 23, 42, 16, 15];
let arr_2 = [20, 18, 12, 8, 5, -2];
let arr_3 = [2, 3, 5, 7, 13, 11];

describe(" sort elements", () => {
  it("sort_1", () => {
    expect(insertion_Sort(arr_1)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("sort_2", () => {
    expect(insertion_Sort(arr_2)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("sort_3", () => {
    expect(insertion_Sort(arr_3)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
