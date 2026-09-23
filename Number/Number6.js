// 35.Write a javascript program to check whether a number contains any duplicate digits
// let n = 1556
// let obj = {};
// while(n>0){
//     let digit = n%10;
//     obj[digit] = (obj[digit] || 0) + 1
//     n = Math.floor(n/10);
// }
// for(let key in obj){
//     if(obj[key] > 1){
//         console.log(key);
//     }
// }

let n = 156
let obj = {};
while(n>0){
    let digit = n%10;
    obj[digit] = (obj[digit] || 0) + 1
    n = Math.floor(n/10);
}
let res = [];
for(let key in obj){
    if(obj[key] > 1){
        res.push(key);
    }
}
if(res.length > 0){
    return res
}
else{
    return null;
}
console.log(res);


// 36.Write a javascript program to remove all the zeros from a number
// let n = 12034056;
// let res = 0;
// let p = 1;
// while(n>0){
//     let digit = n%10;
//     if(digit !== 0){
//         res = res + digit * p;
//         p = p * 10
//     }
//     n = Math.floor(n/10)
// }
// console.log(res);