const doorState = n => {
  const doors = new Array(10).fill('closed');
  let count = 1;
  while (count <= n) {
    for (let i = count - 1; i < 10; i += count) {
      doors[i] = doors[i] === 'closed' ? 'open' : 'closed';
    }
    count += 1;
  }
  return doors;
};

console.log(doorState(10));
