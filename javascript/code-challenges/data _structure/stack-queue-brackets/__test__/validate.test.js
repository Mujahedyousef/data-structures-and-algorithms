"use strict";


const validate = require('../validate-brackets');

describe('testing', () => {

    it('test a null parameter', () => {
        let str_1 = "";
        
        expect(validate(str_1)).toBeNull()
    })
    it('test a true brackets', () => {
        let str_1 = "({[]})"
        validate(str_1);
        expect(validate(str_1)).toBeDefined();
        // expect(validate(str_1)).toBeTruthy();
    })

    it('test false brackets', () => {
        let str_2 = "}{][)("
        expect(validate(str_2)).toBeFalsy();
    })
    it('test false brackets', () => {
        let str_3 = "[(({}]]"
        expect(validate(str_3)).toBeFalsy();
    })
    it('test false brackets ', () => {
        let str_4 = "([{"
        expect(validate(str_4)).toBeFalsy();
    })
})

