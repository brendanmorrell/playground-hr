'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.counter = 0;
}

EventEmitter.prototype.on = function(funcName, func) {
  this[funcName] = this[funcName] ? this[funcName].concat(func) : [func];
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (this[funcName]) this[funcName].forEach(func => func(...args));
};
EventEmitter.prototype.remove = function(funcName) {
  if (this[funcName]) {
    delete this[funcName];
  }
};

const instance = new EventEmitter();
var counter = 0;
var myString = '';

instance.on('increment', function() {
  counter++;
});
console.log(counter);
instance.trigger('increment');
console.log(counter);
instance.on('increment', (...args) => {
  if (args.length) {
    myString = args.reduce((acc, x) => acc + x);
  }
});
instance.trigger('increment', 'a', 'b');
console.log(instance);
console.log(counter, myString);
instance.trigger('increment');
console.log(counter, myString);
instance.remove('increment');
console.log(instance);

module.exports = EventEmitter;
