// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}
console.log(findAverage([]));
