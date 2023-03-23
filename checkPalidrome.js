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