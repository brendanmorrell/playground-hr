const isPrime = (n, cache) => {
  if (n < 2 || !n || n.constructor.name !== 'Number') return false;
  let isPrime = true;
  if (cache.length) {
    for (let i = 0; i < cache.length; i++) {
      if (n % cache[i] === 0) {
        if (!cache.includes(n / cache[i])) cache.push(n / cache[i]);
        isPrime = false;
        break;
      }
    }
  } else {
    let count = cache[cache.length - 1] + 1 || 2;
    while (count < n) {
      if (n % count === 0) {
        isPrime = false;
        cache.push(count);
        break;
      }
      count += 1;
    }
  }
  return { isPrime, cache };
};
const primesInRange = (x, y) => {
  // if (!x || !y) {
  //   if (x) return isPrime(x).isPrime ? [x] : [];
  //   if (y) return isPrime(y).isPrime ? [y] : [];
  //   return [];
  // }
  let max = Math.max(x, y);
  let min = Math.min(x, y);
  let primes = [];
  let cache = [];
  while (min <= max) {
    let result = isPrime(min, cache);
    if (result.isPrime) {
      primes.push(min);
      cache = result.cache;
    }
    min += 1;
  }
  return primes;
};

// console.log(primesInRange(1, 100));

const primesInRange2 = (x, y) => {
  const isPrime = n => {
    if (n < 2) return false;
    let isPrime = true;
    let count = 2;
    while (count < n) {
      if (n % count === 0) {
        isPrime = false;
        break;
      }
      count += 1;
    }
    return isPrime;
  };
  let max = Math.max(x, y);
  let min = Math.min(x, y);
  let primes = [];
  while (min <= max) {
    if (isPrime(min)) primes.push(min);
    min += 1;
  }
  return primes;
};
console.log(primesInRange2(2, 10));
