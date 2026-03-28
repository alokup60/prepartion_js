class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }

  multiplePush(...elements) {
    for (let el of elements) {
      this.dataStore[this.top++] = el;
    }
  }

  pop() {
    if (this.top === 0) return undefined;
    return this.dataStore[--this.top];
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  clear() {
    this.top = 0;
    this.dataStore = [];
  }

  length() {
    return this.top;
  }
}

var s1 = new Stack();
s1.push(2);

console.log(s1.length());
console.log(s1.peek())
