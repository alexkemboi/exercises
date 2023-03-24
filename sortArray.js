function sortArray(arr){
    let sortedArray=[];   
    while(sortedArray.length!==arr.length){
        let largestElement=0;
        let largestElementIndex=0;
        for(let i=0;i<=arr.length;i++){
            if(arr[i]>largestElement){
                largestElement=arr[i];
                largestElementIndex=i;
            }           
        }
        sortedArray.push(largestElement);
        arr.splice(largestElementIndex,1);
    }
    return sortedArray;
}
const arr=[9,2,5,10,100];
const newArray=sortArray(arr);
console.log(newArray);