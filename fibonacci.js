function printFibonacci(num){
    const series=[0,1];
    for(let i=2;i<=num;i++){
        let nextFibonancciNumber=series[i-2]+series[i-1];
        if(nextFibonancciNumber<=num){
            series.push(nextFibonancciNumber);
        }else{
            break;
        }
    }
    return series;
}

console.log(printFibonacci(10));