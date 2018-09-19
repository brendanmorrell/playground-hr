/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(args) {
  this.push = function push(...pushArgs) {
    if (pushArgs) {
      [...pushArgs].forEach((arg) => {
        this.content.chronOrder.push(arg);
        this.content.valOrder.push(arg);
      });
      this.content.valOrder = this.content.valOrder.sort((a, b) => a - b);
    }
    return this.content.chronOrder.length;
  };
  this.pop = function pop() {
    let poppedValue;
    if (this.content.chronOrder.length) {
      poppedValue = this.content.chronOrder.pop();
      let newValOrder = [];
      for (let i = 0; i < this.content.valOrder.length; i += 1) {
        const val = this.content.valOrder[i];
        if (val !== poppedValue) {
          newValOrder.push(val);
        } else {
          newValOrder = newValOrder.concat(this.content.valOrder.slice(i + 1));
          break;
        }
      }
      this.content.valOrder = newValOrder;
    }
    return poppedValue;
  };
  this.getMax = function getMax() {
    return this.content.valOrder[this.content.valOrder.length - 1];
  };
  this.content = args
    ? {
      chronOrder: [...args],
      valOrder: [...args].sort((a, b) => a - b),
    }
    : {
      chronOrder: [],
      valOrder: [],
    };
}

// const stack = new Stack([1, 3, 2]);
// console.log(stack.content);
// console.log(stack.push(7, -1, 1));
// console.log(stack.content);
// console.log(stack.pop());
// console.log(stack.content);
// console.log(stack.getMax());

module.exports = Stack;
