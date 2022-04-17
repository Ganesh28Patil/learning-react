// next Greater Element to Right

// console.log('data:', data);

var data = [1,3,2,4];

// i/p 1 3 2 4
// o/p 3 4 4 -1
//indx 0 1 2 3

// O(n) time complexity
let stack = [];
let ans = [];

for(let i = data.length; i >= 0; i--){
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
console.log(ans.reverse().join(" "));




/*
// O(n^2)
let ans = [];
for(var i = 0; i < data.length; i ++){
    // console.log("i = ",i);
    let next = data[i];
    for(var j = i; j < data.length; j++){
        // console.log("i",i,"  ","j",j,"  ","Data/next",next);        
        if(data[j+1] > next){
            next = data[j+1];
            ans.push(next);
            break;
        }
        if(data[j] == data.length){
            ans.push(-1);
        }
        }
       
    }
    // if(i == data.length){
    //     ans.push(-1); 
    // }


console.log("ans: ",ans.join(" "));

*/





