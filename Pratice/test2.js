

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// let n =5; 
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=i; j<=n; j++){
//         row += "* "
//     }
//     console.log(row);
// }

// 1
// 12
// 123
// 1234
// 12345
// let n = 5;
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }


// 1
// 22
// 333
// 4444
// 55555

// let n = 5; 
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row+= i 
//     }
//     console.log(row);
// }

// 1
// 23
// 456
// 78910
// let n= 4;
// let num = 1
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row += num
//         num++;
//     }
//     console.log(row);
// }

// l
// let n = 53842;
// let count = 0;
// while(n>0){
//     let digit = n%10;
//     count++;
//     n = Math.floor(n/10);
// }
// console.log(count);

// let n = 582;
// let rev = 0;
// while(n>0){
//     let digit = n%10;
//     rev = rev*10+digit;
//     n = Math.floor(n/10);
// }
// console.log(rev);

// let n= 115;
// let copy = n;
// let rev =0;
// while(n>0){
//     let digit = n%10;
//     rev = rev*10 + digit;
//     n = Math.floor(n/10);
// }
// if(copy === rev){
//     console.log("It is a palindrome number");
// }
// else{
//     console.log("It is not a palindrome number");
// }

// let n = 153;
// let copy = n;
// let count = 0;
// let sum = 0;
// while(n>0){
//     count++;
//     n= Math.floor(n/10);
// }
// n= copy;
// while(n>0){
//     let digit  = n%10;
//     sum += digit ** count;
//     n = Math.floor(n/10);
// }
// copy == sum ? console.log("Armstrong") : console.log("Not")

// let n = 145;
// let copy = n;
// let sum = 0;
// while(n>0){
//     let digit = n%10;
//     let fact = 1;
//     for(let i=1;i<=digit; i++){
//         fact *= i
//     }
//     sum += fact;
//     n = Math.floor(n/10)
// }
// if(copy == sum){
//     console.log("Strong Number");
// }
// else{
//     console.log("Not");
// }
// function isAutomorphic(n){
//     let square = n**2;
//     while(n>0){
//         let digit = n%10;
//         let sq_digit = square%10;
//         if(digit !== sq_digit){
//             return "It is not an Automorphic Number";
//         }
//         n = Math.floor(n/10);
//         square = Math.floor(square/10);
//     }
//     return "It is an Automorphic Number"
// }
// console.log(isAutomorphic(25));



let n = 9;
let sum = 0;
let square = n**2;
while(square>0){
    let digit = square%10;
    sum += digit
    square = Math.floor(square/10);
}
if(sum == n){
    console.log("Neon");
}
else{
    console.log("not");
}