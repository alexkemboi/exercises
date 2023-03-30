/*Write a function that takes in an array of integers and returns the two numbers that add up to a specific target. If no such pair exists, return null. The function should have a time complexity of O(n) and should be able to handle large arrays.

Example input:

scss

findPair([1, 2, 3, 4, 5, 6], 9)

Example output:

csharp

[3, 6]

Explanation:

In this example, the function should find the pair of numbers that add up to 9. The pair is [3, 6] since 3 + 6 = 9.

Here's some additional information:

    The input array may contain duplicates, but the output pair should be unique.
    If there are multiple pairs that add up to the target, the function should return any one of them.
    You can assume that the input array will have at least two elements. */

    findPair([1, 2, 3, 4, 5, 6], 9)
    function findPair(arr,sum){
        let pair=[];
        for(let i=0;i<arr.length;i++){
            for(let x=arr.length;x>0;x--){
                if(arr[i]+arr[x-1]===sum){
                    pair.push([arr[i],arr[x-1]]);
                }
            }
        }
        console.log(pair);
    }