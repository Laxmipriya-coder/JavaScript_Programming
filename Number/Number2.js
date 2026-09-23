// 18/09/2026
// Write a javascript program to check how many digits present in a given number
// function countdigit(n){
// let count = 0;
// while (n > 0) {
//     let digit = n%10;
//     n = Math.floor(n/10);
//     count++;
// }
// console.log("Number of digits:", count);
// }
// countdigit(12695);

// Write a javascript program to print each digit from a given number
// function countdigit(n){
// let count = 0;
// while (n > 0) {
//     let digit = n%10;
//     console.log(digit)
//     n = Math.floor(n/10);
//     count++;
// }

// console.log("Number of digits:", count);
// }
// countdigit(12695);

// write a javascript reverse a number withouit using a inbuild method
// let n = 123456;
// let rev = 0;
// while(n > 0)
// {
//     let digit = n%10;
//     rev = rev*10 +digit
//     n= Math.floor(n/10);
// }
// console.log(rev);

// // Write a javascript program to sum of all digit in a given number
// function EvenSum(n) {
//     let sum = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         let count = 0
//         sum += rem;
//         n = Math.floor(n / 10)
//     }
//     console.log("The sum of number are " + sum);
// }
// EvenSum(112);


// Write a javascript program to sum of even digit in a given number
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



// Write a js program to count how many odd digit  and how many even digit
// function EvenSum(n){
//     let sum = 0;
//     let sum2 = 0;
//     while(n>0){
//         let rem = n%10;
//         let count = 0
//         if(rem%2 ==0){
//             sum += rem;
//         }
//         else{
//             sum2 += rem;
//         }
//         n = Math.floor(n/10)
//     }
//     console.log("The sum of even numbers are " + sum);
//     console.log("The sum of odd numbers are " + sum2);
// }
// EvenSum(78952);

// let n = 45210
// let even=0,odd =0
// while(n>0){
//     let digit = n%10
//     digit%2 == 0 ? even++ : odd++;
//     n = Math.floor(n/10)
// }

// Write a js program to find sum of the square of each digit of a given number
// let n= 143
// let sum = 0
// while (n>0){
//     let digit = n%10
//     sum += digit ** 2
//     n= Math.floor(n/10);
// }
// console.log(sum);

// Write a javascript program to count how many zero are present in a given number
// let n = 99
// let count = 0;
// while(n>0){
//     let digit = n% 10
//     if(digit == 9){
//         count++
//     }
//     n= Math.floor(n/10)
// }
// console.log("The number of zero in a number is " + count);

// write a js program to check how many 9 present in 1-100
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     let n = i;
//     while (n > 0) {
//         let digit = n % 10;

//         if (digit == 9) {
//             count++;
//         }
//         n = Math.floor(n / 10);
//     }
// }
// console.log(count);