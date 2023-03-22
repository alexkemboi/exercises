function noOfVowels(word){
const vowels=['a','e','i','o','u'];
let count=0;
for(let i=0;i<word.length;i++){
    for(let x=0;x<5;x++){
    if(word[i]===vowels[x]){
        count=count+1;
    }
}
}
console.log(count);
}
noOfVowels("maeit");