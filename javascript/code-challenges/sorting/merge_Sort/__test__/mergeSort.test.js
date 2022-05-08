'use strict';
const mergeSort = require('../mergeSort');

describe('test merge sort', () => {
  it('test merge sort ', () => {
    const arr=[0,5,10,3,9,12]
    const sortedArr = [ -1, 0, 5, 8, 9, 18 ];
    const arr_1 = [0,0,0,1,1,1,2,5,89,4,2,3,6,4,1,8,2,1];

    expect(mergeSort(arr)).toEqual([0,3,5,9,10,12]);
    expect(mergeSort(sortedArr)).toEqual([-1,0,5,8,9,18]);
    expect(mergeSort(arr_1)).toEqual([0,0,0,1,1,1,1,1,2,2,2,3,4,4,5,6,8,89]);
  });
});