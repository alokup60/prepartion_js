class Queue {
  constructor() {
    this.dataStore = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(element) {
    this.dataStore[this.backIndex++] = element;
  }

  dequeue() {
    if (this.empty()) return undefined;

    const item = this.dataStore[this.frontIndex];
    delete this.dataStore[this.frontIndex++];
    return item;
  }

  front() {
    return this.empty() ? undefined : this.dataStore[this.frontIndex];
  }

  back() {
    return this.empty() ? undefined : this.dataStore[this.backIndex - 1];
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  empty() {
    return this.size() === 0;
  }

  toString() {
    let result = "";
    for (let i = this.frontIndex; i < this.backIndex; i++) {
      result += this.dataStore[i] + "\n";
    }
    return result;
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); // 10
console.log(q.front());   // 20
console.log(q.size());    // 2