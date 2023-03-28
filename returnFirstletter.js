const returnFirstLetter=(arr)=>{
    let firstLetterArray=[];
    for (let x=0;x<arr.length;x++){
        let firstLetter=[...arr[x]];
        firstLetterArray.push(firstLetter[0]);
    }
    return firstLetterArray;
}
console.log(returnFirstLetter(['alex','pius','bett','uhuru']));