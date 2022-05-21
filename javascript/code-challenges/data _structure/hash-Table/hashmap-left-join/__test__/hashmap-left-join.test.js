'use strict';

const HashMap = require('../../hash_Table');

const leftJoin = require('../hashmap-left-join');


let table_1 = new HashMap(1000);
table_1.set("fond", "enamored");
table_1.set("wrath", "anger");
table_1.set("diligent", "employed");
table_1.set("outfil", "garb");
table_1.set("guide", "usher");

let table_2 = new HashMap(400);
table_2.set("fond", "averse");
table_2.set("wrath", "delight");
table_2.set("diligent", "idle");
table_2.set("guide", "follow");
table_2.set("flow", "jam");


describe('leftJoin test', () => {
    it('all the values in the first hashmap are returned, and if values exist in the right hashmap ', () => {
        expect(leftJoin(table_1, table_2)).toStrictEqual([
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['outfil', 'garb', null],
            ['diligent', 'employed', 'idle']
        ]);
    });
});