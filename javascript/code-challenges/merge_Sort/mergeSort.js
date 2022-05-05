"use strict";

function mergeSort(arr){
    let len = arr.length;
    if(len<=1){
        return arr;
    }
        let mid = Math.floor(len/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);
        mergeSort(left);
        mergeSort(right);
        return  merge(arr,left,right);
    
    }

        function merge(arr,left,right){
            let i = 0;
            let j = 0;
            let k = 0;
            while(i<left.length && j<right.length){
                if(left[i]<right[j]){
                    arr[k] = left[i];
                    i++;
                }else{
                    arr[k] = right[j];
                    j++;
                }
                k++;
            }
            if(i==left.length){
                
                arr[k] = right[j];
                j++;
                k++;
            }else {
                arr[k] = left[i];
                i++;
                k++;
            }
            return arr;
        }
   
    
module.exports = mergeSort;