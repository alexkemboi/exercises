//Create a function that takes an array of numbers and returns a new array with the numbers sorted in descending order.
function arrangeDecendingOrder(arr){
    let sortedArray=[]
    sortedArray=arr.sort((a,b)=>{return b-a;});
    return sortedArray;
}
console.log(arrangeDecendingOrder([2,7,1,5,9,8,3,4]));