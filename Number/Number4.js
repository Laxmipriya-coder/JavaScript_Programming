// 17.write a js program to check wheter a given number is an Armstrong number or not
// sum of the digit == products of digit

// function countOfdigits(n) {
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }
//     return count;
// }

// function isArmstrong(n) {
//     let power = countOfdigits(n);
//     let sum = 0;
//     let original = n;
//     while (n > 0) {
//         let digit = n % 10;
//         sum += digit ** power;
//         n = Math.floor(n / 10);
//     }

//     if (original === sum) {
//         console.log("It is an Armstrong Number");
//     } else {
//         console.log("It is not an Armstrong Number");
//     }
// }

// isArmstrong(123);

//18. Write a js program to print all Armstrong numbers from 1 to 100
// function countOfDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }
//     return count;
// }

// for (let i = 1; i <= 1000; i++) {
//     let power = countOfDigits(i);
//     let copy = i;
//     let sum = 0;
//     while (copy > 0) {
//         let digit = copy % 10;
//         sum += digit ** power;
//         copy = Math.floor(copy / 10);
//     }
//     if (sum === i) {
//         console.log(i);
//     }
// }
// 19. Write a js program to check whether a number is a prime number or not
// for(let n=2; n<=100; n++){
//     let count = 0;
//     for(let i = 1; i<=n; i++){
//         if(n%2 == 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         console.log(n);
//     }
// }

// function isPrime(n){
//     for(let i=2; i<=Math.floor(n/2); i++){
//         if(n%i == 0){
//             return false;
//         }
//         return true;
//     }
// }
// if(isPrime(10)){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not a Prime Number");
// }
// console.log(isPrime(10));

// 20. Write a javascript program  to print all prime numbers from 1 to 100
// let count = 0;
// for (let n = 1; n <= 100; n++) {
//     let factors = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             factors++;
//         }
//     }
//     if (factors == 2) {
//         console.log(n);
//         count++;
//     }
// }

// console.log("Total prime numbers =", count);

//21. fibonaccci Series

// 22.Perfect Number

// let num = 12;
// let sum = 0;
// for (let i = 1; i <= Math.floor(num / 2); i++) {
//     if (num % i == 0) {
//         sum += i
//     }
// }
// if (num == sum) {
//     console.log("It is a Perfect Number");
// }
// else {
//     console.log("It is not a perfect Number");
// }

// 22.Print all the perfect number from 1 to 1000
