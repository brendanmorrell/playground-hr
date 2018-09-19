// any assignment to our obj will automatically trigger this to reset initial to the incoming val
const obj = {
  firstName: 'Brendan',
  lastName: 'Morrell',
  nameHistory: [],
  nameAccessCount: 0,
};
Object.defineProperty(obj, 'fullName', {
  get: function() {
    this.nameAccessCount += 1;
    return `'${this.firstName} ${this.lastName}' is the user's name`;
  },
  set: function(str) {
    const [firstName, lastName] = str.split(' ');
    this.nameHistory.push({ firstName: this.firstName, lastName: this.lastName });
    this.firstName = firstName;
    this.lastName = lastName;
  },
});

console.log(obj.nameAccessCount); // starts at 0
console.log(obj.fullName); // now we are accessing it, so we get XX is user's name, and acesscount is incremented
console.log(obj.nameAccessCount); // thus this is now 1
obj.fullName = 'erin burkett'; // now the setter is fired. name is changed, and brendan morrell is added to the history
console.log(obj.nameAccessCount); // still only gotten once, so still 1
console.log(obj.nameHistory); // now = [{firstName: 'Brendan', lastName: 'Morrell'}]
obj.fullName = 'samwise gamgee';
console.log(obj.nameHistory); // now bren and samqiese in the history
Object.defineProperty(obj, 'fullName', {
  value: 'permanent full name',
  writable: false,
  enumerable: false,
});
