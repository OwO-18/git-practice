// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();

// Test push, print
stack.print(); //[]

stack.push(5);
stack.push(8);
stack.print(); //[5, 8]

// Test pop, peek
stack.peek(); //8
stack.pop();
stack.peek(); //5
​stack.pop();

// Test 
console.log(stack.isEmpty()); //True

