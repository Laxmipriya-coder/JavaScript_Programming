// 19/09/2026
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
function tableCreate(n){
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
} 
}
tableCreate(19)