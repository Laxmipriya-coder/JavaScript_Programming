//1. WRITE A PROGRAM TO CHECK GIVEN NUMBER IS EVEN OR ODD 
// function isEvenOdd(n){
//     if(n%2==0){
//         console.log(`${n} is a Even Number`);
//     }
//     else{
//         console.log(`${n} is a Odd Number`);
//     }
// }
// isEvenOdd(5);

//2.WRITE A PROGRAM TO CHECK THE SQUARE OF A GIVEN NUMBER
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

// write a javascript program to check  a number is palindrome or not
// let n = 9;
// let rev = 0;
// let org = n;
// while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit
//     n = Math.floor(n / 10);
// }
// if (org == rev) {
//     console.log("This is a palindrome Number");
// }
// else {
//     console.log("This is not a palindrome Number");
// }
// console.log(rev);
// write a js program to find first n three digit palindrome number2

// for (let i = 100; i <= 999; i++) {
//     let temp = i;
//     let rev = 0;
//     while (temp > 0) {
//         let digit = temp % 10;
//         rev = rev * 10 + digit;
//         temp = Math.floor(temp / 10);
//     }
//     if (i == rev) {
//         console.log(i);
//     }
// }

// function isPalindrome(n){
//     let rev = 0;
//     let dummy = n;
//     while(n>0){
//         rev = rev*10 + n%10;
//         n = Math.floor(n/10)
//     }
//     return rev === dummy 
// }

// let values = [];
// let i=100
// let num = 5;
// while(values.length<num){
//     if(isPalindrome(i)){
//         values.push(i);
//     }
//     i++
// }
// console.log(values);

// write a javascript program  to print the factorial of a number
// function factorial(n){
// let fact = 1;
// for (let i = n; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log(fact);
// }
// factorial(5)

// write a javascript program to print the table 
// function tableCreate(n){
// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// } 
// }
// tableCreate(19)

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

