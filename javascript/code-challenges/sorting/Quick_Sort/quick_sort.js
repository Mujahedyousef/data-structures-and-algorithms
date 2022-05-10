"use strict";

function quickSortRecursive(arr, start, end) {
 
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

      pivotIndex++;
    }
  }

  // Swapping the pivot with the pivotIndex
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

module.exports = quickSortRecursive;
