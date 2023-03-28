//Write a function that takes an array of numbers and returns the sum of the first and last numbers.
function sum(arr){
    let sum=arr[0]+arr[arr.length-1];
    return sum;
}
console.log(sum([1,2,3,4,5,6,7,8,9]));