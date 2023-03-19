// .find() is a method that returns the value of the first element in an array that satisfies the provided testing function. If no element satisfies the testing function, undefined is returned.

const numbers = [1, 2, 3];
const evenNumber = numbers.find(num => num % 2 === 0);
console.log(evenNumber); // 2
