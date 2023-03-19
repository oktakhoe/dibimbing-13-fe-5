// declaring arrays
console.log("declaring arrays")
numbers = [1,2,3,4,5]
console.log("arrays values: ", numbers)

// accessing arrays
console.log("accessing arrays")
numbers = [1,2,3,4,5]
console.log("array index 0: ", numbers[0])

console.log("array last index: ", numbers[numbers.length - 1])

// shallow vs deep copy
console.log("shallow copy")
a = ["f", "o", "o"]

console.log("arrays a value: ", a)

b = a
console.log("arrays b value: ", b)

b[0] = "b"
console.log("arrays b value: ", b)

console.log("arrays a value: ", a)


console.log("deep copy")
a = ["f", "o", "o"]

console.log("arrays a value: ", a)

b = Array.from(a)
console.log("arrays b value: ", b)

b[0] = "b"
console.log("arrays b value: ", b)

console.log("arrays a value: ", a)

// Methods
// .push() is a method that adds one or more elements to the end of an array and returns the new length of the array.

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]


// .pop() is a method that removes the last element from an array and returns that element.

const numbers = [1, 2, 3];
const lastNumber = numbers.pop();
console.log(lastNumber); // 3
console.log(numbers); // [1, 2]


// .shift() is a method that removes the first element from an array and returns that element.

const numbers = [1, 2, 3];
const firstNumber = numbers.shift();
console.log(firstNumber); // 1
console.log(numbers); // [2, 3]


// .unshift() is a method that adds one or more elements to the beginning of an array and returns the new length of the array.

const numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]

// .slice() is a method that returns a shallow copy of a portion of an array into a new array object. It takes two parameters: the start and end index of the slice.

const numbers = [1, 2, 3];
const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // [2, 3]


// .concat() is a method that merges two or more arrays and returns a new array.

const numbers = [1, 2, 3];
const moreNumbers = [4, 5];
const combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); // [1, 2, 3, 4, 5]

// .reverse() is a method that reverses the order of the elements in an array.

const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]

// .reverse() is a method that reverses the order of the elements in an array.

const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]


// .sort() is a method that sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings.

const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3]

// .indexOf() is a method that returns the first index at which a given element can be found in an array, or -1 if it is not present.

const numbers = [1, 2, 3];
const index = numbers.indexOf(2);
console.log(index); // 1

// .find() is a method that returns the value of the first element in an array that satisfies the provided testing function. If no element satisfies the testing function, undefined is returned.

const numbers = [1, 2, 3];
const evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // 2


// .filter() is a method that creates a new array with all elements that pass the test implemented by the provided testing function.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// .map() is a method that creates a new array with the results of calling a provided function on every element in the array.

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6]

// .reduce() is a method that executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes two arguments: the accumulator and the current value. The reduce() method also has an optional initial value for the accumulator.

const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 6

