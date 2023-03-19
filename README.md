## Question 1

Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

Description:
You are given an array of numbers. You need to write a function that takes this array as an argument and returns the sum of all the numbers in the array.

Complete and fix the existing code:

```javascript
numbers = [1,2,3,4,5]

function sumArray(numbers) {
  let sum = 0;
  ....
  return sum;
}

sumArray(numbers)
# Expected result: 15

```

## Question 2

Write a function that takes an array of numbers as an argument and returns the largest number in the array.

Description:
You are given an array of numbers. You need to write a function that takes this array as an argument and returns the largest number in the array.

Complete and fix the existing code:

```javascript
numbers = [1,2,3,4,5]

function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for(let i=1; i<numbers.length; i++) {
    if(numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}


findLargestNumber(numbers)
# Expected result: 5

```

## Question 3

Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers from the original array.

Description:
You are given an array of numbers. You need to write a function that takes this array as an argument and returns a new array with only the even numbers from the original array.

Complete and fix the existing code:

```javascript
numbers = [1,2,3,4,5]

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  ...
  return evenNumbers;
}

filterEvenNumbers(numbers)
# Expected result: [2,4]

```

## Question 4

Write a function that takes an array of strings as an argument and returns a new array with the length of each string in the original array.

Description:
You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with the length of each string in the original array.

Complete and fix the existing code:

```javascript
words = ["hello", "world"]

function getLengthsOfStrings(strings) {
  let lengths = [];
  ...
  return lengths;
}

getLengthsOfStrings(words)
# Expected result: [5, 5]

```

## Question 5

Write a function that takes an array of numbers as an argument and returns a new array with the same numbers in reverse order.

Description:
You are given an array of numbers. You need to write a function that takes this array as an argument and returns a new array with the same numbers in reverse order.

Complete and fix the existing code:

```javascript
numbers = [1,2,3,4,5]

function reverseArray(numbers) {
  let reversedNumbers = [];
  ...
  return reversedNumbers;
}

reverseArray(numbers)
# Expected result: [5,4,3,2,1]

```

## Question 6

Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.

Description:
You are given an array of numbers. You need to write a function that takes this array as an argument and returns the second smallest number in the array.

Complete and fix the existing code:

```javascript
numbers = [1,2,3,4,5]

function findSecondSmallestNumber(numbers) {
  let secondSmallestNumber = 0;
  ...
  return secondSmallestNumber;
}

findSecondSmallestNumber(numbers)
# Expected result: 2

```

## Question 7

Write a function that takes an array of strings as an argument and returns a new array with only the strings that start with the letter "a".

Description:
You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with only the strings that start with the letter "a".

Complete and fix the existing code:

```javascript
words = ["apple", "banana", "avocado"]

function filterStringsStartingWithA(strings) {
  let filteredStrings = [];
  ...
  return filteredStrings;
}

filterStringsStartingWithA(words)
# Expected result: ["apple", "avocado"]

```
