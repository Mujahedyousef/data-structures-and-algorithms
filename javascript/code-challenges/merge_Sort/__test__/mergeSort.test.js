'use strict';
const mergeSort = require('../mergeSort');

describe('test merge sort', () => {
  it('test merge sort ', () => {
    const arr=[0,5,10,3,6,12]
    const sortedArr = [ -1, 0, 5, 8, 9, 18 ];
    expect(mergeSort(arr)).toEqual([0,3,5,6,10,12]);
    expect(mergeSort(sortedArr)).toEqual([-1,0,5,8,9,18]);
  });
});