//Write a function that takes a string and returns the number of words in it.
function countWords(sentence){
    // use regex to remove leading/trailing white space and split string into words
  let words = sentence.trim().split(/\s+/);
  // return the length of the resulting array of words
  console.log(words);
  return words.length;
}
let myString = "This is a string.";
let numWords = countWords(myString);
console.log(numWords); // output: 4
