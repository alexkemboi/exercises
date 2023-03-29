/*Given an array of nested arrays, write a function flatten that returns a flattened array containing all the elements from the original nested arrays.
    For example, given the following input array:
    javascript
        const input = [1, [2, 3], [[4, 5], 6], 7];
The flatten function should return the following flattened array:
    javascript
    [1, 2, 3, 4, 5, 6, 7]

Requirements
    The flatten function should take one argument: an array of nested arrays.
    The flatten function should return a flattened array containing all the elements from the original nested arrays.

    The flatten function should be able to handle an arbitrary number of nested arrays.
    The flatten function should not modify the original input array.

Example Usage
    javascript
    const input = [1, [2, 3], [[4, 5], 6], 7];
    const result = flatten(input);
    console.log(result); // [1, 2, 3, 4, 5, 6, 7]
Tips
    You can use recursion to handle an arbitrary number of nested arrays.
    The Array.isArray method can be used to determine if an element is an array.
    The concat method can be used to concatenate two arrays.
Bonus
Implement the flatten function using the reduce method.*/

    const input = [1, [2, 3], [[4, 5], 6], 7];
    let flattenedArray=[];
    const result = flatten(input);
    console.log(result); // [1, 2, 3, 4, 5, 6, 7]
    function flatten(input){
        for(let i=0;i<input.length;i++){
            if(Array.isArray(input[i])){
                flatten(input[i]);
            }else{
                flattenedArray.push(input[i]);
            }
        }
        return flattenedArray
    };