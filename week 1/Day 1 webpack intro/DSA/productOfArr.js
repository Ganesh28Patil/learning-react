/*
Product Of Array 
Description:-
Given a array of N 32 bit integers. 
You need to find product of array for each i without considering ith element. 
where 0 <= i <= n-1 . See sample test case for better understanding.

You are not allowed to use division operator. 
It is given that product will fit in 32 bit integer.
*/
let arr = [1, 2, 3, 4, 5];
console.log('arr:', arr);

function prodArr(arr,n){
    let left = [];
    let product = 1;
    left[0] = 1;
    for(let i = 1; i < arr.length; i++){
        product *= arr[i-1];
        left[i] = product;
    }
    let right = [];
    let prod = 1;
    right[n-1] = 1;
    right[0] = 1;
    for(let i = n-2; i >= 0; i--){
        prod *= arr[i+1];
        right[i] = prod;
    }
    console.log('left:', left);
    console.log('right:', right);
    let ans = [];
    for(let i = 0; i < left.length; i++){
        ans.push(left[i]*right[i]);
    }
    console.log('ans:', ...ans);
    
}
prodArr(arr,arr.length);