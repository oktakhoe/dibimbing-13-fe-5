// .reduce() is a method that executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes two arguments: the accumulator and the current value. The reduce() method also has an optional initial value for the accumulator.

const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 6
