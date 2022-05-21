"use strict";
const hash_table=require('../hash_Table');

function hash_Map_repeated_Word(str) {
    let strArr = str.toLowerCase().match(/\w+/g);

    const strHash = new hash_table(strArr.length);

    for (let i = 0; i < strArr.length; i++) {
        if (strHash.contain(strArr[i])) {
            // console.log(strArr[i]);
            return strArr[i];
        }
        strHash.set(strArr[i], strArr[i]);
    }
    return 'not found any repeated word';

}
module.exports=hash_Map_repeated_Word;