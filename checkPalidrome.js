function checkPalidrome(word){
    let similarCharacters=0;
    for(let i=0;i<(word.length-1)/2;i++){
        for(let c=word.length-1;c>(word.length-1)/2;c--){
            if(word[i]===word[c]){
                similarCharacters++
            }
        }
    }
  if(similarCharacters===(word.length-1)/2){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkPalidrome('eye'));



//check if word is Palidrome
function isPalindrome(word) {
    // Convert the word to lowercase and remove any non-alphanumeric characters
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the word and compare it to the original
    return word === word.split('').reverse().join('');
  }
  