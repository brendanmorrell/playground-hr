const wordCloud = str => {
  let result;
  if (str && str.constructor.name === 'String' && str.length) {
    result = new Map();
    let word = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (char.replace(/[^a-z|^-]/, '')) word += char;
      else if (word) {
        if (result.get(word)) result.set(word, result.get(word) + 1);
        else result.set(word, 1);
        word = '';
      }
    }
    return result;
  }
};
console.log(wordCloud('After beating the eggs, Dana-read read dana dana-read the next step:'));
