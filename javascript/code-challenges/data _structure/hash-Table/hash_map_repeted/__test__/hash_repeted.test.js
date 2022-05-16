"use strict";

const hash_Map_repeated_Word = require('../hash_map')
describe('hash_Map_repeated_Word', () => {


    it(' test 1 ', () => {
        let str_1 = "Once upon a time, there was a brave princess who...";
        let test_1 = hash_Map_repeated_Word(str_1);
        expect(test_1).toStrictEqual('a');
    });

    it('test_2', () => {
        let str_2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
        let test_2 = hash_Map_repeated_Word(str_2);
        expect(test_2).toEqual('it');
    });

    it('test_3', () => {
        let str_3 = "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
        let test_3 = hash_Map_repeated_Word(str_3);
        expect(test_3).toEqual('summer');
    });
  
});