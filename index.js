//Print odd numbers in an array
const printOddNumbers = function (arr) {
  return arr.filter((num) => num % 2 !== 0);
};

console.log(printOddNumbers([1, 2, 3, 4, 5]));

//Convert all the strings to title caps in a string array

const toTitleCaps = function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

console.log(toTitleCaps(["hello", "world"]));

//Sum of all numbers in an array

const sumArray = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//Return all the prime numbers in an array
const isPrime = function (num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimes = function (arr) {
  return arr.filter(isPrime);
};

console.log(getPrimes([1, 2, 3, 4, 5, 6, 7]));

//Return all the palindromes in an array

const isPalindrome = function (str) {
  return str === str.split("").reverse().join("");
};

const getPalindromes = function (arr) {
  return arr.filter(isPalindrome);
};

console.log(getPalindromes(["madam", "hello", "racecar", "world"]));

//Return median of two sorted arrays of the same size
const getMedian = function (arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = merged.length / 2;
  return (merged[mid - 1] + merged[mid]) / 2;
};

console.log(getMedian([1, 3, 5], [2, 4, 6]));

//Remove duplicates from an array

const removeDuplicates = function (arr) {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//Rotate an array by k times

const rotateArray = function (arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

//Print odd numbers in an array
const printOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5]));

//Convert all the strings to title caps in a string array
const toTitleCaps = (arr) =>
  arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["hello", "world"]));

//Sum of all numbers in an array
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // 15

//Return all the prime numbers in an array
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimes = (arr) => arr.filter(isPrime);
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7]));

//Return all the palindromes in an array
const isPalindrome = (str) => str === str.split("").reverse().join("");
const getPalindromes = (arr) => arr.filter(isPalindrome);
console.log(getPalindromes(["madam", "hello", "racecar", "world"]));
