function printFibonacci(num,word){
    const series=[0,1];
    for(let i=2;i<=num;i++){
        let nextFibonancciNumber=series[i-2]+series[i-1];
        if(nextFibonancciNumber<=num){
            series.push(nextFibonancciNumber);
        }else{
            break;
        }
    }
    console.log(series);
    word=word.toLowerCase(word);
    
    return word===word.split('').reverse().join('');
}

console.log(printFibonacci(10,'anna'));