function* createFlow() {
  const num = 5;
  const newNum = yield num;
  yield newNum + num;
}

const iterator = createFlow();
console.log(iterator);
console.log(iterator.next().value); // 5
console.log(iterator.next(2)); //{ value: 7 (NOT 10), done: false}
console.log(iterator.next(2).done); // true

const myGeneratorFunction = func => {
  let strFuncFull = func.toString();
  let strFuncStart = strFuncFull.slice(strFuncFull.indexOf('{') + 1);
  let strFunc = strFuncStart.slice(0, strFuncStart.length - 1);
  return {
    next(val) {
      const nextYield = strFunc.indexOf('yield');
      const nextStop = strFunc.indexOf(';', nextYield);
      if (nextStop === -1) this.done = true;
      const currentContext = strFunc.slice(0, nextStop);
      strFunc = strFunc.slice(nextStop + 1);
      return currentContext;
    },
    done: false,
  };
};
// almost there. this will separate the code out into the right blocks
// would need to return the evaluated result of sliceing from the end of yield to the semicolon
// and , if it was during assignment, replace that whole chunk with a placeholder (beginning yield to semicolon);
// and then reset the position to the position before the assignment const, and check to see if value, and if value, replace placeholder with that value before running again

const myFunc = function*() {
  const num = 5;
  const newNum = yield num;
  yield newNum + num;
};

const myIterator = myGeneratorFunction(myFunc);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.done);
