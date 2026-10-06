// 1.FIND THE LARGEST NUMBER IN AN ARRAY
// let arr = [10,25,7,45,18]
// let max = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);


//2.FIND THE SMALLEST NUMBER IN AN ARRAY
// let arr = [12,5,18,3,9];
// let min = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min);


//3.  PRINT THE SUM AND AVERAGE OF AN ARRAY
// let arr = [10,20,30,40,50];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// let avg = sum/arr.length;
// console.log("Average is " + avg);
// console.log("Sum is " + sum);


// 4.COUNT THE EVEN AND ODD NUMBERS IN AN ARRAY
// let arr = [10,15,22,7,8,13];
// let Evencount = 0;
// let Oddcount = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] %2 == 0){
//         Evencount++
//     }
//     else{
//         Oddcount++
//     }
// }
// console.log("Even Count is " + Evencount);
// console.log("Odd Count is " + Oddcount);


// 5.SEARCH AN ELEMENT IN AN ARRAY
// function search(ele) {
//     let tar = 30;
//     for (let i = 0; i < ele.length; i++) {
//         if (ele[i] === tar) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(search([10, 20, 30]));

// 6.REVERSE AN ARRAY WITHOUT CREATING ANOTHER ARRAY
// let arr = [10, 20, 30, 40, 50];
// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log(arr);


// 7.FIND THE SECOND LARGEST ELEMENT
// let arr = [10,20,30,40]
// let firstmax = arr[0];
// let secondmax = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > firstmax){
//         secondmax = firstmax;
//         firstmax = arr[i];
//     }
//     else if(arr[i] > secondmax && arr[i] !== firstmax){
//         secondmax = arr[i];
//     }
// }
// console.log(secondmax);

// 8.COUNT FREQUENCY OF AN DIGIT
// let arr = [10,20,50,60,10,20,80,90,50,20];
// let obj = {};
// for(let i=0; i<arr.length; i++){
//     let digit = arr[i];
//     obj[digit] = (obj[digit] || 0)+1;
// }
// console.log(obj);

// 9.PRINT DUPLICATE ELEMENTS IN AN ARRAY
// let arr = [10,20,30,20,40,10,50,30];
// let obj = {};
// let copy = []
// for(let i=0; i<arr.length; i++){
//     let digit = arr[i];
//     obj[digit] = (obj[digit] || 0 ) + 1;
// }
// for(let key in obj){
//     if(obj[key] > 1){
//         copy[copy.length] = key
//     }
// }
// console.log(obj);
// console.log(copy);

// 10.REMOVE DUPLICATE VALUES IN AN ARRAY AND CREATE AN UNIQUE ARRAY CONTAINING UNIQUE VALUE

let arr = [10,30,20,40,20,10,70,80]
let copy = [];
let uni = [];
let obj = {};
for(let i=0; i<arr.length; i++){
    let digit = arr[i];
    obj[digit] = (obj[digit] || 0 ) + 1
}
for(let key in obj){
    if(obj[key]> 1){
        copy[copy.length] = key
    }
    else{
        uni[uni.length] = key
    }
}

console.log(uni);