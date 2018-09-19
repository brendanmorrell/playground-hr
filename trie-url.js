function Trie() {
  this.addWord = function addWord(str) {
    if (str.slice(0, 4) === 'www.') str = str.slice(4);
    if (str.constructor.name === 'String') str = str.split('').concat('*');
    let object = this.contents;
    function addNestedObj(object, letter = str.shift()) {
      if (!object[letter]) object[letter] = {};
      if (str.length) addNestedObj(object[letter]);
    }
    addNestedObj(object);
  };
  this.contents = {};
  this.visited = function(str) {
    if (str.slice(0, 4) === 'www.') str = str.slice(4);
    let arr = str.split('');
    let string = `this.contents`;
    arr.forEach(char => (string += `['${char}']`));
    string += `['*']`;
    try {
      let exists = eval(string);
      console.log(exists);
      return exists ? true : false;
    } catch (error) {
      console.log('object');
      return false;
    }
  };
}

const T = new Trie();
T.addWord('www.dog.com');
T.addWord('donut');
console.log(T.contents);
console.log(T.visited('donu'));
