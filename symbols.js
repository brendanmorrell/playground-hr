const fooSym = Symbol('g');
const otherFoo = Symbol('f');
const otherSym = Symbol();
const obj = {};
obj['foo'] = 'foo';
obj[fooSym] = 'baz';
obj[otherFoo] = 'brendan';
obj[otherSym] = 'bing';
console.log(obj[fooSym]); // returns baz
// but none of the values/properties show up in the object
// also invisible with for, for in, for of, and Object.getownPropertyNames
console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
for (let key in obj) {
  console.log(`key= ${key}`);
  console.log(`obj[${key}]= ${obj[key]}`);
}
// can only get them from getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(obj));
// but unless you have access to that reference variable, still cant use
console.log(obj[Symbol('g')]); // undefined
console.log(obj[fooSym]); // baz
const globalNonUnique1 = Symbol.for('a');
const globalNonUnique2 = Symbol.for('a');
console.log(globalNonUnique1 === globalNonUnique2); // true
obj[globalNonUnique1] = 'accessible with other symbols that are the same';
const duplicateSymbol = Object.getOwnPropertySymbols(obj)[3];
console.log(duplicateSymbol[3]); // Symbol(a)
console.log(obj[Symbol.for('a')]);
console.log(obj[duplicateSymbol]);

// symbols can be copied unless you specify them as on-enumerable in Object.defineProperties
const copyTheSymbols = Object.assign({}, obj);
console.log(copyTheSymbols[duplicateSymbol]);
Object.defineProperty(obj, fooSym, {
  enumerable: false,
});

console.log(obj[fooSym]); // baz
const fooSymNotCopied = Object.assign({}, obj);
console.log(fooSymNotCopied[fooSym]); //undefined

// Symbol.keyFor will give the key for global symbols. not for local though
console.log(Symbol.keyFor(duplicateSymbol));
console.log(Symbol.keyFor(fooSym));

// if you want both keys and symbols, use Reflect.keys
console.log(Reflect.ownKeys(obj)); // includes 'foo' and symbols

// iterator symbol property defines the iterability of an item. Object normally isn't predictable, so this is cool
const iterable = {
  data: ['hello', 'world'],
  [Symbol.iterator]: function*() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const iterator of iterable) {
  console.log(iterator);
}
