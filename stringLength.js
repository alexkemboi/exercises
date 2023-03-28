//Write a function that takes an array of strings and returns an array with the length of each string.
const showStringLength=(arr)=>{
    const arrayLength=[];
    for(let i=0;i<arr.length;i++){
        arrayLength.push(arr[i].length);
    }
    return arrayLength;
}
console.log(showStringLength(['alex','kemboi','pius','kamala']));