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

// let n = 156
// let obj = {};
// while(n>0){
//     let digit = n%10;
//     obj[digit] = (obj[digit] || 0) + 1
//     n = Math.floor(n/10);
// }
// let res = [];
// for(let key in obj){
//     if(obj[key] > 1){
//         res.push(key);
//     }
// }
// if(res.length > 0){
//     return res
// }
// else{
//     return null;
// }
// console.log(res);


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


// fibonacci
// function fibonacci(n){
//     let series = [0,1];
//     let i = 2;
//     while(series.length <n){
//         series[i] = series[i-1] + series[i-2]
//         i++
//     }
//     console.log(series);
// }
// fibonacci(10);

// Strong Number
// let n = 145;
// let copy = n;
// let sum = 0;

// while(n>0){
//     let digit = n%10;
//     let fact = 1;
//     for(let i=1; i<=digit; i++){
//         fact = fact *i;
//     }
//     sum = sum + fact;
//     n = Math.floor(n/10);
// }
// if(sum == copy){
//     console.log("Its a Strong Number");
// }
// else{
//     console.log("Its not a Strong Number");
// }

// 41.Write a JS program to print all strong numbers from 1 to 100000.

// for(let n=1; n<=100000; n++){
//     let copy = n;
//     let sum = 0;
//     while(copy>0){
//         let digit = copy%10;
//         let fact = 1;
//         for(let i=1; i<=digit; i++){
//             fact = fact * i;
//         }
//         sum += fact;
//         copy = Math.floor(copy/10);
//     }
//     if(sum == n){
//         console.log(n);
//     }
// }

// Write a JS program to check whether a number is a Harshad/Niven number or not.
//  • an integer that is divisible by the sum of its digits in a given number. 
// • 18---------- 1+8 =9 --- 18/9 ===0
// let n = 18;
// let copy = n;
// let sum = 0;

// while(n>0){
//     let digit = n%10;
//     sum += digit;
//     n = Math.floor(n/10);
// }
// if(n%sum == 0){
//     console.log("It is a Niven Number");
// }
// else{
//     console.log("It is not a Niven Number");
// }


//43. Write a JS program to check whether a given number is an automorphic number or not. 
// • a number whose square ends with the exact same digits as the number itself 
// • 5--52 ===25 || 25--252 === 625
// let n = 25;
// let original = n;
// let squ = n ** 2;
// let count = 0;
// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }
// let power = 10 ** count;
// if (squ % power === original) {
//     console.log("Automorphic Number");
// } else {
//     console.log("It is not an Automorphic Number");
// }

// function isAutomorphic(n){
//     let square = n**2;
//     while(n>0){
//         let digit = n%10;
//         let sq_digit = square%10;
//         if(digit !== sq_digit){
//             return "It is not an automorphic Number"
//         }
//         n = Math.floor(n/10);
//         square = Math.floor(square/10);
//     }
//     return "It is an automorphic number";
// }
// console.log(isAutomorphic(25));

// Write a JS program to check whether a given number is a neon number or not. 
// • a number where the sum of the digits of its square is equal to the original number itself 
// • 9 -- 9**2 === 81 === 1+8 ===9
// let n = 12;
// let square = n ** 2;
// let sum = 0;

// while (square > 0) {
//     let digit = square % 10;
//     sum = sum + digit;
//     square = Math.floor(square / 10);
// }

// if (sum === n) {
//     console.log(n + " is a Neon Number");
// } else {
//     console.log(n + " is not a Neon Number");
// }

// Write a JS program to check whether a given number is a duck number or not. 
// • a positive number that contains at least one zero digit anywhere other than the beginning\
// let n = 1230;
// let temp = n;
// let isDuck = false;

// while (temp > 0) {
//     let digit = temp % 10;
//     if (digit === 0) {
//         isDuck = true;
//         break;
//     }

//     temp = Math.floor(temp / 10);
// }

// if (isDuck) {
//     console.log(n + " is a Duck Number");
// } else {
//     console.log(n + " is not a Duck Number");
// }

// function duckNumber(num){
//     let n = parseInt(num);
//     while(n>0){
//         let digit = n%10;
//         if(digit === 0){
//             return true
//         }
//         n = Math.floor(n/10);
//     }
//     return false
// }
// console.log(duckNumber("11"));

// CHECK a given number is valid or not

// SpyNumber
// function isSpyNumber(n){
//     let sum = 0;
//     let product = 1;
//     while(n>0){
//         let digit = n%10;
//         sum += digit;
//         product *= digit;
//         n = Math.floor(n/10)
//     }
//     return sum == product
// }
// for(let i=0; i<=1000; i++){
//     if(isSpyNumber(i)){
//         console.log(i);
//     }
// }
// sunny number
// function sunnyNumber(n){
//     let num = n+1;
//     let sq_root = num ** (1/2);
//     // let sq_root = num ** 0.5;
//     // let sq_root = Math.sqrt(num)
//     if(sq_root%1 !== 0){
//         return false
//     }
//     return true
// }
// console.log(sunnyNumber(48));

// let n=5;
// for(let i=1; i<=n; i++){
//     let row="";
//     for(let j=1; j<=n; j++){
//         i+j >= n+1? row += j : row+= "  "
//     }
//     console.log(row);
// }

