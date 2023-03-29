// Write a function that takes in a string of parentheses, brackets, and curly braces, 
// and determines if the order of the parentheses, brackets, and curly braces is valid. 
// For example, the string "({[]})" is valid, but the string "{[}]}" is not.
// You must use only one stack data structure to solve this problem. 
// Your function should return true if the order is valid and false otherwise.
function isValidOrder(str){
    let x=str.length;
    const correctOrder=['{}','[]','()'];
    let checkStr=[];
    let count=0;
    for(let i=0;i<str.length/2;i++){
       checkStr.push(str[i]+str[x-1]);
        x=x-1;
    }
    for(let x=0;x<checkStr.length;x++){
        if(correctOrder.includes(checkStr[x])){count ++}
    }
    if(str.length/2===count){
        return true;
    }else{
        return false;
    }
}
console.log(isValidOrder('{([{]})}'));