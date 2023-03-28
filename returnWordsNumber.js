function countWords(sentence){
    // use regex to remove leading/trailing white space and split string into words
  let words = sentence.trim().split(/\s+/);
  // return the length of the resulting array of words
  return words.length;
}
let myString = "This is a string.";
let numWords = countWords(myString);
console.log(numWords); // output: 4
