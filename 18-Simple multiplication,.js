// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/583710ccaa6717322c000105

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2));

// CARA 2 //
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
