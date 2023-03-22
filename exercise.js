function multiply(a,b){
    const product=a*b;
    return product;
}
const results=multiply(2,5);
console.log(results);

Arra=[1,[1,[2,3,[5,6,7]]],2];
const arr=[1, [2, [3, 4], 5], 6];
function flatten(arr) {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArr = flatArr.concat(flatten(arr[i]));
      } else {
        flatArr.push(arr[i]);
      }
    }
   return flatArr;
  }
  const res=flatten(arr);
  console.log(res);