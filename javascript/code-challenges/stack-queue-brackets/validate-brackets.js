"use strict";
const Stack = require("./stack");

function validate(string) {
    let stack = new Stack()
    let arr = string.split("")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(' || arr[i] == '{' || arr[i] == '[') {
            stack.pushItem(arr[i]);
        } else if (arr[i] == ')' && stack.peek() == '(') {
            stack.popItem();
        }
        else if (arr[i] == '}' && stack.peek() == '{') {
            stack.popItem();
        }
        else if (arr[i] == ']' && stack.peek() == '[') {
            stack.popItem();
        } else if (arr[i] == '}' || arr[i] == ')' || arr[i] == ']') {
            stack.pushItem(arr[i]);
        }

    }
    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}
module.exports = validate;