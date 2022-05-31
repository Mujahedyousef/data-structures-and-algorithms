
const HashTable = require('../hash_Table')

const uniqueChar = (text) => {
    
    let array=text.split('').map(item => item.trim());
    console.log(array);
    const hashTable = new HashTable(60);
    
    for (let i = 0; i < array.length; i++) {
     
            if (!hashTable.contain(array[i].toLowerCase())) {

                hashTable.set(array[i].toLowerCase(), array[i].toLowerCase());
            } else {

                return false;
            }
        
    }
    return true;
};

function mostCommonWord(text){
    let strArr = text.toLowerCase().match(/\w+/g);
    const strHash = new HashTable(strArr.length);
    let max=0;
    for (let i = 0; i < strArr.length; i++) {
        if (strHash.contain(strArr[i])) {
            strHash.set(strArr[i], strHash.get(strArr[i])+1);
        } else {
            strHash.set(strArr[i], 1);
        }
        if(strHash.get(strArr[i])>max){
            max=strHash.get(strArr[i]);
        }
    }
    for(let i=0;i < strArr.length; i++){
        if (strHash.get(strArr[i])===max){
           return strArr[i];
        }
    }
}




module.exports = {uniqueChar, mostCommonWord};

