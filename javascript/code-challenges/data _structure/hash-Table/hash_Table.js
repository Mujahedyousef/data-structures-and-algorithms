"use strict";
const LinkedList = require("./linked-list");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {

    return key.split('').reduce((acc,char)=>{
        return acc + char.charCodeAt();
    },0) * 599 % this.size;

//Another way to do it:
  // Mujahed >> 82+97+545 >> 350 >> (350*599)%size
        // let asciiSum = key.split('').reduce((acc,char)=>{
        //     return acc + char.charCodeAt();
        // },0);
        // let hashedKey = (asciiSum*599)%this.size;
        // return hashedKey;

  }

  set(key, value) {
      let index=this.hash(key)
      if(!this.map[index]){
          this.map[index]=new LinkedList();
      }
     let current=this.map[index].head;
      let entryData={[key]:value};
      while(current){
            if(current.value[key]){
                current.value[key]=value;
                return;
            }
            current=current.next;
        }
        this.map[index].append(entryData);
    }


  get(key) {
        let index=this.hash(key);
        let current=this.map[index].head;
        while(current){
            if(current.value[key]){
                return(current.value[key]); 
            }
            current=current.next;
        }
        return null;

}

contain(key){

    let index=this.hash(key);
    if(this.map[index]){

    
    let current= this.map[index].head;
    while(current){

        if(current.value[key]){
            return true; 
        }
        current=current.next;
    }
    return false; 
}}

keys(){
    let allKey=[];
    for(let i=0;i<this.size;i++){
        if(this.map[i]){
            let current=this.map[i].head;
            while(current){
                allKey.push(Object.keys(current.value)[0]); 

                current=current.next;
            }
        }
    }
    // console.log(allKey);
    return allKey;
}
}
// const hashMap = new HashMap(2);
// hashMap.set("bgbgbgb", "82")
// hashMap.set("ali", "97")
// hashMap.set("khan", "545")
// hashMap.set("gbgbg", "23")
// hashMap.set("ragbgbgbzan", "20")
// hashMap.set("bgbgbg", "0")
// hashMap.get("rabgbgbzan")
// hashMap.keys()
// hashMap.contain("bgbgb")
// hashMap.contain("kk")
// console.log(hashMap);


module.exports = HashMap;
