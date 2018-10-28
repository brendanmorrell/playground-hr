const taggedTemplateFunction = (strings, ...values) => {
  console.log(strings);
  let isBrendan = false;
  return strings.reduce((str, x, i) => {
    if (!isBrendan) {
      str += x;
      if (values[i]) {
        str += values[i];
        if (values[i] === 'Brendan') {
          isBrendan = true;
          const additionalMessage = "'s worst nightmare. also, brendan is a jackass";
          str += additionalMessage;
        }
      }
    }
    return str;
  }, '');
};

const user = 'Brendan';
console.log(
  taggedTemplateFunction`blue cats are ${user}'s favorite things in the world dont you agree`
);
