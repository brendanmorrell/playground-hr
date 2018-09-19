// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// OPTION 1
function fizzbuzz1(num) {
  let count = 1;
  let result = [];
  while (count <= num) {
    let fizzbuzz = '';
    if (count % 3 === 0) {
      fizzbuzz += 'fizz';
    }
    if (count % 5 === 0) {
      fizzbuzz += 'buzz';
    }
    result.push(fizzbuzz ? fizzbuzz : count);
    count += 1;
  }
  return result;
}

//OPTION 2
function fizzbuzz2(num) {
  let count = 1;
  let result = [];
  while (count <= num) {
    let element = '';
    switch (true) {
      case (count % 3 === 0 && count % 5 === 0):
        element = 'fizzbuzz';
        break;
      case (count % 3 === 0):
        element = 'fizz';
        break;
      case (count % 5 === 0):
        element = 'buzz';
        break;
      default:
        element = count;
        break;
    }
    result.push(element);
    count += 1;
  }
  return result;
}

module.exports = {
  fizzbuzz1,
  fizzbuzz2
};
