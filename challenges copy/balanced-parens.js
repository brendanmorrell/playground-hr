function balancedParens(input) {
  return !input.split('').reduce((acc, char) => {
    switch (true) {
      case char === '(':
        acc.push(char);
        break;
      case char === '{':
        acc.push(char);
        break;
      case char === '[':
        acc.push(char);
        break;
      case char === ')' && acc[acc.length - 1] === '(':
        acc.pop();
        break;
      case char === '}' && acc[acc.length - 1] === '{':
        acc.pop();
        break;
      case char === ']' && acc[acc.length - 1] === '[':
        acc.pop();
        break;
      default:
        break;
    }
    return acc;
  }, []).length;
}

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())')); // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false
module.exports = balancedParens;
