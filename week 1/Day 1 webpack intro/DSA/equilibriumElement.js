/*Equilibrium Element 
Description:-
Given an array A of N positive numbers. 
The task is to find the position where equilibrium first occurs in the array. 
Equilibrium position in an array is a position such that 
the sum of elements before it is equal to the sum of elements after it.
Output:-
In a new line print the position at which
the elements are at equilibrium if no equilibrium point exists print -1.
*/
// O(n)
let arr = [3,3,5,5,8];
// console.log('arr:', arr)
let flag = false;
function equiElement(arr,N){
    let left = [];
    let leftSum = 0;
    left[0] = 0;
    for(let i = 1; i < N; i++){
        leftSum += arr[i-1]; 
        left[i] = leftSum; 
    }
    let right = [];
    let rightSum = 0;
    right[N-1] = 0;
    for(let i = N-2; i >= 0; i--){
        rightSum += arr[i+1];
        right[i] = rightSum;
    }

    // console.log('left:', left);

    // console.log('right:', right);
    for(let i = 0; i < left.length; i++){
        if(left[i] === right[i]){
            console.log(i+1);
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log(-1);
    }
}
equiElement(arr,arr.length);

// alternate method
// O(n^2)

function equiElement(arr,N){
let flag = false;
    for(let i = 0; i < arr.length; i++){
        var left = 0;
        for(j = 0; j < i; j++) {
            left += arr[j];
        }
        var right = 0;
        for(j = i+1; j < arr.length; j++){
            right +=arr[j];
        }
        // console.log(left+"   "+right);
        if(left == right){
            console.log(i+1);
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log(-1);
    }
}
equiElement(arr,arr.length);