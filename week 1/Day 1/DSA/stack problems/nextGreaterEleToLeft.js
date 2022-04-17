var data = [1,3,2,4];

// i/p  1  3  2 4
// o/p -1 -1  3 3
//indx 0 1 2 3

let stack = [];
let ans = [];

// for(let i = data.length; i >= 0; i--)
for(let i = 0; i < data.length; i++){
    if(stack.length == 0){
        ans.push(-1);
    }else if(stack.length > 0 && stack[stack.length-1] >= data[i]){
        ans.push(stack[stack.length - 1]);
    }else if(stack.length > 0 && stack[stack.length-1] <= data[i]){
        while(stack.length > 0 && stack[stack.length - 1] <= data[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans.push(-1);
        }else{
            ans.push(stack[stack.length-1]);
        }
    }
    stack.push(data[i]);

}
console.log(ans);
// console.log(ans.reverse().join(" "));
