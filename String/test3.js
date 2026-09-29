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

// write a js code to check a given string is a palindrome or not
function reverseString(str){
    let res = "";
    for(let i=str.length-1; i>=0; i--){
        res += str[i]
    }
    if(res==str){
        console.log("It is a palindrome ");
    }
    else{
        console.log("It is not a palindrome");
    }
}
reverseString("madam");