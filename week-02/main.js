// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();

// Test push, print
stack.print(); //[]

stack.push(5);
stack.push(8);
stack.print(); //[5, 8]

console.log(stack.peek()); // 8
stack.pop();
console.log(stack.peek()); // 5
stack.print(); // [5]
console.log(stack.size()); // 1
stack.clear();
console.log(stack.isEmpty()); // true
