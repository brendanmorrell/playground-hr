const recursiveFizzBuzz = (n, count = 1) => {
  if (n < count || n.constructor.name !== 'Number') return;
  if (count % 3 && count % 5) console.log(count);
  else {
    if (count % 3 === 0 && count % 5 === 0) console.log('fizzbuzz');
    else {
      if (count % 3 === 0) console.log('fizz');
      if (count % 5 === 0) console.log('buzz');
    }
  }
  return recursiveFizzBuzz(n, count + 1);
};

// recursiveFizzBuzz(15);

const recursiveFBStr = (n, count = 1) => {
  if (n < count || n.constructor.name !== 'Number') return;
  let fizzbuzz = '';
  if (count % 3 === 0) fizzbuzz += 'fizz';
  if (count % 5 === 0) fizzbuzz += 'buzz';
  console.log(fizzbuzz || count);
  return recursiveFBStr(n, (count += 1));
};

// recursiveFBStr(15)
