"use strict";
const quickSortRecursive = require("../quick_sort");

describe("test quick sort", () => {
  it("test quick sort ", () => {
    const arr = [0, 5, 10, 3, 9, 12];
    const arr_1 = [-1, 0, 5, 8, 9, 18];
    const arr_2 = [0, 0, 0, 1, 1, 1, 2, 5, 89, 4, 2, 3, 6, 4, 1, 8, 2, 1];

    expect(quickSortRecursive(arr, 0, arr.length - 1)).toEqual([
      0, 3, 5, 9, 10, 12,
    ]);
    expect(quickSortRecursive(arr_1, 0, arr_1.length - 1)).toEqual([
      -1, 0, 5, 8, 9, 18,
    ]);
    expect(quickSortRecursive(arr_2, 0, arr_2.length - 1)).toEqual([
      0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 8, 89,
    ]);
  });
});
