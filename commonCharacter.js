function findMostCommonCharacter(word){
    let countSimilarCharacter = new Array(word.length).fill(0);
    for(let i=0;i<word.length;i++){
        for(let x=0;x<word.length;x++){
            if(word[i]===word[x]){
                countSimilarCharacter[i]++
            }
        }
    }

    let mostCommonCharacter=0;
    let positionMostCommonCharacter=0;
    for(let b=0;b<countSimilarCharacter.length;b++){
        if(mostCommonCharacter<countSimilarCharacter[b]){
            mostCommonCharacter=countSimilarCharacter[b];
            positionMostCommonCharacter=b;
        }
    }
    console.log(word[positionMostCommonCharacter]);
}
findMostCommonCharacter('ALEXE');