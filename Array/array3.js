// let arr = [20,30,40,20,10,30,50,60];
// let copy = [];
// let uni = []
// let obj ={};
// for(let i=0; i<arr.length; i++){
//     let digit = arr[i];
//     obj[digit] = (obj[digit] || 0) + 1
// }
// for(let key in obj){
//     if(obj[key] > 1){
//         copy[copy.length] = key;
//     }
//     else{
//         uni[uni.length] = key
//     }
// }
// console.log(copy);
// console.log(uni);

// let arr = [9,8,50,2,3,4,65,85];
// let evenCount = 0;
// let oddCount = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// }
// console.log(`Even Count is ${evenCount} and Odd Count is ${oddCount}`);


// function searchEle(arr){
//     let tar = 30;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(searchEle([10,50,60,80,50,30]));

// let arr = [10,20,30,40,50,60];
// let start = 0;
// let end = arr.length - 1;
// while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
// }
// console.log(arr);


// let arr = [10,20,30,40,5,3,8];
// let firstmax = arr[0];
// let secondmax = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > firstmax){
//         secondmax = firstmax;
//         firstmax = arr[i];
//     }
//     else if(arr[i] > secondmax && arr[i] !== secondmax){
//         secondmax = arr[i];
//     }
// }
// console.log(secondmax);

let arr = [1,40,20,30,40,50,1,20];
let obj = {};
for(let i=0; i<arr.length; i++){
    let digit  = arr[i];
    obj[digit] = (obj[digit] || 0 ) + 1
}
for(let key in obj){
    if(obj[key] > 1){
        console.log(key);
    }
}
// console.log(obj);