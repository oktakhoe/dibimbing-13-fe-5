// .filter() is a method that creates a new array with all elements that pass the test implemented by the provided testing function.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
