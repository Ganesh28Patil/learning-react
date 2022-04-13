var data = [1,3,2,4];
// console.log('data:', data);


// i/p 1 3 2 4
// o/p 3 4 4 -1
//indx 0 1 2 3
let ans = [];
for(var i = 0; i < data.length; i ++){
    console.log("i = ",i);
    let next = data[i];
    for(var j = i; j < data.length; j++){
        console.log("i",i,"  ","j",j,"  ","Data/next",next);        
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





