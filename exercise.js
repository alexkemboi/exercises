function multiply(a,b){
    const product=a*b;
    return product;
}
const results=multiply(2,5);
console.log(results);

Arra=[1,[1,[2,3,[5,6,7]]],2];
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