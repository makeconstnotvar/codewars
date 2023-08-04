

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push = function (val) {
    this.stack.push(val);
    if(val>this.minStack[this.minStack.length-1]){
      this.minStack.push(this.minStack[this.minStack.length-1])
    }
    else {
      this.minStack.push(val);
    }

  };
  pop = function () {
    this.minStack.pop();
    return this.stack.pop();
  };
  top = function () {
    return this.stack[this.minStack.length-1];
  };
  getMin = function () {
    return this.minStack[this.minStack.length-1];
  };
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */