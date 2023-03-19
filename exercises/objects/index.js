// Objects
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

// Literals and properties
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

user.isAdmin = true;

delete user.age;

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// this would give a syntax error
user.likes birds = true

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let user = {
  name: "John",
  age: 30, // The last property in the list may end with a comma:
}

// The "for..in" loop
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 30, true
}

