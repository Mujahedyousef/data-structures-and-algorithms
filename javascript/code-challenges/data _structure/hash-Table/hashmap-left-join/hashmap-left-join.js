"use strict";
function leftJoin(hashOne, hashTwo) {
    let result = [];

    hashOne.map.forEach(element => {
        Object.keys(element.head.value).forEach((key) => {
            result.push([key, hashOne.get(key), hashTwo.get(key)]);
        });
    });
    return result;
}


module.exports = leftJoin;