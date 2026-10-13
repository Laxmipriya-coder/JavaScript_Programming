// 1.WRITE A JAVASCRIPT PROGRAM TO FIND DUPLICATE ELEMENTS IN AGIVEN ARRAY
let arr = [10, 20, 50, 30, 20, 50, 80, 90]
let obj = {};
let copy = [];
let uni = [];
for (let i = 0; i < arr.length; i++) {
    let digit = arr[i];
    obj[digit] = (obj[digit] || 0) + 1;
}
for (let key in obj) {
    if (obj[key] > 1) {
        copy.push(key)
    }
    else{
       uni.push(key) 
    }
}
console.log(copy);
console.log(uni);
// console.log(obj);

// TWO POINTER APPROACH
// function findDuplicateElements(arr){
//     let res = [];
//     for(let i=0;i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 if(! res.includes(arr[i])){
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     console.log(res);
// }
// findDuplicateElements([10,20,80,50,10,50,30,50,60,50]);

// FIND THE TWO ELEMENTS IN AN GIVEN ARRAY WHERE THE BOTH OF SUM IS EQUAL WITH TARGET ELEMENTS
// function targetEle(arr,tar){
//     let res = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] === tar){
//                 res.push([arr[i],arr[j]])
//             }
//         }
//     }
//     console.log(res);
// }
// targetEle([1,3,4,6,13,7],7);

// REMOVE DUPLICATE DIGIT FROM AN ARRAY

// function removeDuplicates(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!res.includes(arr[i])) {
//             res.push(arr[i]);
//         }
//     }
//     console.log(res);
// }

// removeDuplicates([10, 20, 80, 50, 10, 50, 30, 50, 60, 50]);

// function removeDuplicates(arr){
//     let res =[];
//     for(let i=0; i<arr.length; i++){
//         let count =0;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]  === arr[j]){
//                 count++;
//                 break;
//             }
//         }
//         if(count === 0){
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
// }
// removeDuplicates([10,50,60,30,80,10,50,20])

// function checkString(str) {
//     let upper = 0, lower = 0, number = 0, special = 0
//     for (let i = 0; i < str.length; i++) {
//         let ch = str.charCodeAt(i);
//         if (ch >= 65 && ch <= 90) {
//             upper = 1;
//         }
//         else if (ch >= 97 && ch <= 122) {
//             lower = 1;
//         }
//         else if (ch >= 48 && ch <= 57) {
//             number = 1;
//         }
//         else {
//             special = 1;
//         }
//     }

//     if (upper && lower && special && number && str.length >= 8) {
//         console.log("Valid String");
//     } else {
//         console.log("Invalid String");
//     }
// }
// checkString("TKKJGG@123");

// function greet(name,age){
//     this.name = name
//     this.age = age
// }
// console.log(Object.prototype)
