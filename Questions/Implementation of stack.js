// Design a stack that supports push, pop, top, and retrieving the minimum element in
// constant time.
// • push(x) -- Push element x onto stack.
// • pop() -- Removes the element on top of the stack.
// • top() -- Get the top element.
// • getMin() -- Retrieve the minimum element in the stack


class Stack {
    constructor(stack, minStack){
      this.stack = [];
      this.minStack = [];
    }
      
    push(x) {
      this.stack.push(x);
      if (this.minStack.length === 0){
        this.minStack.push(x);
      } 
      else if (this.minStack[this.minStack.length -1] >= x ){
        this.minStack.push(x);
      }
    }
  
    pop() {
      if (!this.isEmpty()){
        this.stack.pop();
      } else {
        console.error("Stack is empty! Can't pop items");
      }
    }
    
    top() {
      return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
      if (this.stack.length === 0) {
        return true;
      } else return false; 
    }
    
    getMin() {
      return this.minStack[this.minStack.length -1]
    }
    
    }
  
  // Driver code to test the above implementation: 
  
  const s = new Stack;
  s.push(3);
  s.push(9);
  s.push(7);
  s.push(44);
  s.pop()
  s.push(1);
  s.push(44);
  s.push(72);
  s.pop()
  s.pop()
  s.push(19);
  console.log(`The current stack is: ${s.stack}`)
  console.log(`The top element of the stack is: ${s.top()}`)
  console.log(`The minimum element in the stack is: ${s.getMin()}`)