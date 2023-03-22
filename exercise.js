import noOfVowels from './noOfVowels';
noOfVowels('meat');
//Functin that takes two numbers as an arguments and returns the product
function multiply(a,b){
    const product=a*b;
    return product;
}
const results=multiply(2,5);
console.log(results);



//Function to flatten an array with nested arrays
const arr=[1, [2, [3, 4], 5], 6];
function flatten(arr) {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArr = flatArr.concat(flatten(arr[i]));
      } else {
        flatArr.push(arr[i]);
      }
    }
   return flatArr;
  }
  const res=flatten(arr);
  console.log(res);



  //Function to get the largest value in an array
  function largestValue(array){
    let largestNumber=0;
      for(let i=0;i<res.length;i++){
        if(res[i]>largestNumber){
          largestNumber=res[i];
        }
      }
      return largestNumber;
  }
  console.log(largestValue(res));




  //function to reverse a string
  function reverseString(word){
    let reverseWord=word.split("").reverse().join("");
    // for(let i=word.length-1;i>=0;i--){
    //    reverseWord+=word[i];
    // }
    return reverseWord;
  }
  const username='alex';
  const newWord=reverseString(username);
  console.log(newWord);



  //Function that adds even numbers in an array
 function sumEven(arr){
  let sum=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2===0){
        sum=sum+arr[i];
      }
    }
    console.log(sum);
 }
 sumEven(res);