// Write a program to check given number is even or odd
// function isEvenOdd(n){
//     if(n%2==0){
//         console.log(`${n} is a Even Number`);
//     }
//     else{
//         console.log(`${n} is a Odd Number`);
//     }
// }
// isEvenOdd(5);

// Write a Program to check the square of a given number
// function square(n){
//    return n**2
// }
// console.log(square(25));

// Write a program to find 1st 10 even number
// function evenNumber(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i * 2);
//     }
// }
// evenNumber(10)
// Other Way
// function evenNumber(n){
//     let number = [];
//     let i=1;
//     while(number.length<=n-1){
//         if(i%2 == 0){
//             number.push(i);
//         }
//         i++
//     }
//     console.log(number);
// }
// evenNumber(5);

//  sum of the n even number
// function evenNumber(n){
//     let number = [];
//     let i=1;
//     let sum = 0;
//     while(number.length<=n-1){
//         if(i%2 == 0){
//             number.push(i);
//             sum +=i
//         }
//         i++
//     }
//     console.log(number);
//     console.log(sum);
// }
// evenNumber(10);
// Other Way
// function sumofEven(n){
//     let sum =0;
//     let count =0;
//     let i=1;
//     while(count <n) {
//         if(i%2 == 0){
//             sum += i;
//             count ++;
//         }
//         i++;
//     }
//     console.log(sum);
// }
// sumofEven(5)

// Find the biggest Number from given two numbers
// suppose a=10 b=20 b is biger
// function bigger(a,b){
//     if(a>b){
//         console.log("a is bigger");
//     }
//     else{
//         console.log(`${b} is bigger `);
//     }
// }
// bigger(10,20);

// 10,20,30
// 20,40,10
// 10,5,7


// Without using Modules find even odd numbers
let n = 10;

if (n / 2 == Math.floor(n / 2)) {
    console.log("Even");
} else {
    console.log("Odd");
}
// function secondLargest(a, b, c) {
//     if ((a > b && a < c) || (a < b && a > c)) {
//         console.log(a);
//     }
//     else if ((b > a && b < c) || (b < a && b > c)) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }

// secondLargest(10, 20, 30);
// secondLargest(20, 40, 10);
// secondLargest(10, 5, 7);