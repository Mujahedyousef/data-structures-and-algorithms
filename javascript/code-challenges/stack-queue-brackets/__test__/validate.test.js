"use strict";

const { it } = require('eslint/lib/rule-tester/rule-tester');
const validateBrackets = require('../validate-brackets');

describe('testing',()=>{
    it('testing a right string',()=>{
        let str_1 = "{}"
        expect(validateBrackets(str_1)).toBeFalsy();
    })
    
    it('testing wrong string',()=>{
        let str_2 = "}{][)("
        expect(validateBrackets(str_2)).toBeFalsy();
    })
    it('testing closing brackets only',()=>{
        let str_3 = "[(({}]]"
        expect(validateBrackets(str_3)).toBeFalsy();
    })
    it('test flase brackets ',()=>{
        let str_4 = "([{"
        expect(validateBrackets(str_4)).toBeFalsy();
    })
})


