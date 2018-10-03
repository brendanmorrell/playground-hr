function* flow() {
  const num = 10;
  const newNum = yield num;
  yield newNum + 5;
  yield 4;
}
const returnElement = flow();
console.log(returnElement);
console.log(returnElement.next());
console.log(returnElement.next(2));
console.log(returnElement.next());
console.log(returnElement.next());
