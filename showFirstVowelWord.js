//Create a function that takes an array of strings and returns an array with only the ones that start with a vowel.
function returnFirstVowelWords(arr){
    const vowels=['a','e','i','o','u'];
    let firstLetterVowelWord=[];
    for(let x=0;x<arr.length;x++){
       if(vowels.includes(arr[x][0])){
            firstLetterVowelWord.push(arr[x]);
       }
    }
        return firstLetterVowelWord;
}
console.log(returnFirstVowelWords(['alex','pius','peter','eli','orpha']));