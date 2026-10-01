// 1. Write a js program to find the length of a string
// let str = "Laxmipriya";
// console.log(str.length);


// 2.Write a javascript program to find the length of a string without using length method
// let str2 = "Laxmipriya";
// let count = 0;
// for(let i of str2){
//     count++
// };
// console.log(count);

// 3.write a js to reverse a string
// function reverseString(str){
//     let res = "";
//     for(let i=str.length-1; i>=0; i--){
//         res += str[i]
//     }
//     console.log(res);
// }
// reverseString("Laxmipriya");

// Another Way
// function reverseStr(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseStr("Laxmipriya"));

//4. write a js code to check a given string is a palindrome or not
// function reverseString(str){
//     let res = "";
//     for(let i=str.length-1; i>=0; i--){
//         res += str[i]
//     }
//     if(res==str){
//         console.log("It is a palindrome ");
//     }
//     else{
//         console.log("It is not a palindrome");
//     }
// }
// reverseString("madam");

// Other Way
// function palindrome(str){
//     let i=0; j= str.length-1;
//     while(i<=j){
//         if(str[i] !== str[j]){
//             return false
//         }
//         i++,j--
//     }
//     return true
// }
// console.log(palindrome("sundri"));

// 5.Write a javascript program to count how many vowels present in a string
// let str = "Laxmipriya";
// let count = 0;
// for(let ch of str){
//     if(ch == "a" || ch=="e" || ch == "i" || ch == "o" ||ch == "u"){
//         count++;
//     }
// }
// console.log(count);

// function countVowels(str){
//     let i =0; count =0;
//     while(i<str.length){
//         if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||str[i] === "u"){
//             count ++;
//         }
//         i++
//     }
//     console.log(count);
// }
// countVowels("Laxmipriya");


for(var i=0; i<3; i++){
    setTimeout(()=> console.log(i),1000);
}