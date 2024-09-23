// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)

export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  //在變數前面加上#的話會使得這個變數變成「私有變數」，代表這個變數只會在這個class內被取用。這樣做的好處是main code不會不小心access到class裡面的變數，避免不必要的麻煩。
  #items;

  constructor() {
	  this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
	  this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
	  return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
	  if(this.isEmpty()){
		  return null;
	  }
  
	  let top_index = this.#items.length - 1; //最頂端的index是長度扣1
	  return this.#items[top_index];
  }
  // 檢查 stack 是否為空
  isEmpty() {
	  if(this.#items.length == 0){
		  return true;
	  }
  	  else
		  return false;
  }

  // 回傳 stack 中元素的個數
  size() {
	  return this.#items.length;
  }

  // 清空 stack 
  clear() {
	  this.#items = [];
  }

  // 印出 stack 內容
  print() {
	  console.log(this.#items);
  }
}
