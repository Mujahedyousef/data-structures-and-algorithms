"use strict";


const hash_Table = require("../hash_Table");



describe("hash_Table", () => {
    let hashTable;
    beforeEach(() => {
        hashTable = new hash_Table(2);
    }
    );

   it("set method",()=>{
    hashTable.set("name","Mujahed");
            expect(hashTable.get("name")).toBe("Mujahed");
    }
    );
    it("contain method",()=>{
        hashTable.set("name","Mujahed");
        hashTable.set("city","Amman");
        hashTable.set("key1","samer");
        hashTable.set("key5","welcome");
        expect(hashTable.contain("name")).toBe(true);
        expect(hashTable.contain("dvv")).toBe(false);
    });
   
    
    it("get method with collisions",()=>{
        hashTable.set("name","Mujahed");
        hashTable.set("city","Amman");
        hashTable.set("key1","samer");
        hashTable.set("key5","welcome");
        expect(hashTable.get("name")).toBe("Mujahed");
        expect(hashTable.get("city")).toBe("Amman");
        expect(hashTable.get("key1")).toBe("samer");
        expect(hashTable.get("key5")).toBe("welcome");
    });


    it("set method",()=>{
        hashTable.set("name","Mujahed");
        hashTable.set("name","khaled");
         expect(hashTable.get("name")).toBe("khaled");
        });

        it("keys method",()=>{
            hashTable.set("name","Mujahed");
            hashTable.set("age","25");
            hashTable.set("city","Amman");
            hashTable.set("country","Jordan");
            expect(hashTable.keys()).toEqual(["country","name","age","city"]);
            });
it("hash method return number data Type",()=>{
    
    expect(typeof hashTable.hash("name")).toEqual("number");
})
}
); 
