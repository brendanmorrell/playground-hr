const nonDecToDec = (str, radix) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let val = +str[i];
    if (val > radix - 1) return undefined;
    let place = str.length - 1 - i;
    result += val * radix ** place;
  }
  return result;
};
// think binary: 1 = 1 * 2^0 (val * radix^place)
console.log(nonDecToDec('121', 3));
console.log((16).toString(3));
