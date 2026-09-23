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
//  console.log("Total prime numbers =", count);

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

// 23.Print all the perfect number from 1 to 1000
// for(let n=1; n<=100; n++){
//     let sum = 0;
//     for(let i=1; i<=n/2; i++){
//         if(n%i == 0){
//             sum += i
//         }
//     }
//     if(sum === n){
//         console.log(n);
//     }
// }

// 24.Print a javascript to print all the factors of a given number
// let num = 12;
// for(let i=0; i<=num/2; i++){
//     if(num%i == 0){
//         console.log(i);
//     }
// } 

// 25. Write a javascript program to count the number of factors of  given number
// let num = 10;
// let count =0;
// for(let i=0; i<=num/2; i++){
//     if(num%i == 0){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`The number of factors of ${num} is ${count}`);

// 26.Write a javascript program to find the sum all of factors of  given number
// let num = 10;
// let count =0;
// let sum = 0;
// for(let i=0; i<=num/2; i++){
//     if(num%i == 0){
//         count++;
//         sum += i
//     }
// }
// console.log(`The sum of factors of ${num} is ${sum}`);

// 27.Write a js program to find the gcd/hcf of two numbers
// let a = 12;
// let b = 18;
// while (b !== 0) {
//     let rem = a % b;
//     a = b;
//     b = rem;
// }
// console.log(a);

// 28.Write a program to find the lcm of two numbers
// let a = 12;
// let b=18;
// let max = Math.max(a,b);
// while(true){
//     if(max%a ===0 && max%b === 0){
//         console.log(max);
//         break
//     }
//     max++
// }
// Other Way
// let a= 12;
// let b=18;
// let lcm = a;
// while(lcm%b !== 0){
//     lcm += a
// }
// console.log(lcm);

// 29.Write a JavaScript Program to find the largest digit present in a number
// let n = 58321;
// let largest = 0;
// while (n > 0) {
//     let digit = n % 10;
//     if (digit > largest) {
//         largest = digit;
//     }

//     n = Math.floor(n / 10);
// }
// console.log("Largest digit =", largest);

// 30.Write a js program to find the smallest digit present in a number
// let n = 58321;
// let smallest = 9;
// while (n > 0) {
//     let digit = n % 10;
//     if (smallest >= digit) {
//         smallest= digit;
//     }
//     n = Math.floor(n / 10);
// }
// console.log("Smallest digit =", smallest);

// 31.Write a javascript program to sum of even digit in a given number
// function EvenSum(n) {
//     let sum = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         let count = 0
//         if(rem %2 ==0){
//         sum += rem;
//         }
//         n = Math.floor(n / 10)
//     }
//     console.log("The sum of even number are " + sum);
// }
// EvenSum(122);

// 32.Write a javascript program to sum of odd digit in a given number
// function oddSum(n) {
//     let sum = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         let count = 0
//         if (rem % 2 != 0) {
//             sum += rem;
//         }
//         n = Math.floor(n / 10)
//     }
//     console.log("The sum of odd number are " + sum);
// }
// oddSum(1252);

// 33.Write a javascript program to count the occurrence of a given digit in a number
// function occurenceDigit(n){
//     let give = 3
//     let count = 0;
//     while(n>0){
//         let digit = n%10
//         if(digit === give){
//             count++;
//         }
//         n = Math.floor(n/10);
//     }
//     console.log(count);
// }
// occurenceDigit(1253483656)

// 34.
// function frequencyDigit(n){
//     let obj = {};
//     while(n>0){
//         let digit = n%10;
//         obj[digit] = (obj[digit] || 0) + 1;
//         n = Math.floor(n/10);
//     }
//     console.log(obj);
// }
// frequencyDigit(1253483656)
