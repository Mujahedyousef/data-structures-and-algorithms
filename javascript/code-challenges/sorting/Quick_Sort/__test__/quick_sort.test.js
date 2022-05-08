"use strict";

const quickSort = require("../quick_sort");
describe("testing quickSort", () => {
  let arr_1 = [2, 1,  7, 10,  6];
  let arr_2 = [0, -5, 13, 5, 7, 20, 6];
  let arr_3 = [23, 0, 9, 6, 1, 7, 26];
 let n=arr_1.length -1;
 let n2=arr_2.length -1;
 let n3=arr_3.length -1;
  expect(quickSort(arr_1,0, n )).toEqual([1, 2, 6, 7,  10]);
  expect(quickSort(arr_2,0, n2)).toEqual([-5, 0, 5, 6, 7, 13, 20]);
  expect(quickSort(arr_3,0, n3)).toEqual([0, 1, 6, 7, 9, 23, 26]);
});
