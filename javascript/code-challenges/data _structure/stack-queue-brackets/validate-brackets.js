"use strict";

const Stack = require("./stack");
function validate(string) {
    let stack = new Stack()
    let arr = string.split("")

    if (string === '') {
        return null
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(' || arr[i] == '{' || arr[i] == '[') {
            stack.pushItem(arr[i]);
        }
        else if ((arr[i] === ')' && stack.peek() === '(')
            || (arr[i] === '}' && stack.peek() === '{')
            || (arr[i] === ']' && stack.peek() === '[')
        ) {
            stack.popItem();
        }
        else {
            return false

        }
        if (stack.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = validate;