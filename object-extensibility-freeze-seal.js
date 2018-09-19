const deepFreeze = obj => {
  Object.freeze(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if (typeof element === 'object') {
        deepFreeze(element);
      }
    }
  }
  return obj;
};
const obj = { prop: 'yet to be frozen', nested: { prop: 'nested frozen' } };
console.log(obj);
const obj2 = deepFreeze(obj);
console.log(obj2);
obj2.nested.prop = 'something else';
console.log(obj2);
console.log(obj2 === obj);
obj.prop = 'ssss';
console.log(obj);

const dontAddOrDeleteProps = {
  prop: 'i can change so long as i am writable',
};
dontAddOrDeleteProps.prop2 = 'but you cant add or delete other props';
console.log(dontAddOrDeleteProps);
Object.seal(dontAddOrDeleteProps);
dontAddOrDeleteProps.prop3 = 'nothing added';
console.log(dontAddOrDeleteProps);
delete dontAddOrDeleteProps.prop2;
console.log(dontAddOrDeleteProps);
dontAddOrDeleteProps.prop = 'now im different since i can be changed';
console.log(dontAddOrDeleteProps);
console.log(Object.isSealed(dontAddOrDeleteProps));
console.log(Object.isFrozen(obj));
console.log(Object.isExtensible(obj));
console.log(Object.isExtensible(dontAddOrDeleteProps));
const extensible = { prop: 'my prop' };
console.log(Object.isExtensible(extensible));
Object.preventExtensions(extensible);

// So this will throw an error

// Object.defineProperty(extensible, 'newVal', {
//   get: function() {
//     console.log('i cant be added');
//   },
//   set: x => {
//     console.log('neither can i');
//   },
// });

console.log(Object.isExtensible(extensible));
extensible.somethingNew = false;
console.log(extensible);
// still can delete props
delete extensible.prop;
console.log(extensible);

console.log(
  (extensible.__proto__.thisIsNew = () => console.log('my prototype can still be altered'))
);
extensible.thisIsNew();
// but you cannot reassign the prototype
console.log((extensible.__proto__ = { new: 'prototype' }));
// prototypal note: instances do not have a .prototype property. only their constructors do
// thus, we access the __proto__ of the instance, which is the link from the instance to the constructor's prototype
// the constructor's prototype can also by accessed on an instance with Object.getPrototypeOf(someObject);
console.log(Object.getPrototypeOf(extensible));
console.log(Object.getPrototypeOf({}));
console.log(extensible);
