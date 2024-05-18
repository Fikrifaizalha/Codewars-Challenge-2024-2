// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  let s = str.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split("").reverse().join("");
  }
  return s.join(" ");
}

console.log(reverseWords("double spaced words"));

// CARA KE 2 //

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
console.log(reverseWords("APPLE"));
