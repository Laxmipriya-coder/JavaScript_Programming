// function splitwords(str){
//     let words = [];
//     let word= "";
//     for(let i=0; i<str.length; i++){
//         let char = str[i];
//         if(char === " "){
//             words.push(word);
//             word = ""
//         }
//         else{
//             word += char;
//         }
//     }
//     if(word !== ""){
//         words.push(word)
//         word = ""
//     }
//     return words
// }

// function reverseWords(sentence){
//     let arr = splitwords(sentence);
//     let reverseString = ""
//     for(let i=arr.length-1; i>=0;i--){
//         i>0 ? reverseString += arr[i]+' ': reverseString += arr[i];
//     }
//     return reverseString
// }

// console.log(reverseWords("I Love Programming"));



// 13.Capitalize each word
// function splitwords(str){
//     let words = [];
//     let word= "";
//     for(let i=0; i<str.length; i++){
//         let char = str[i];
//         if(char === " "){
//             words.push(word);
//             word = ""
//         }
//         else{
//             word += char;
//         }
//     }
//     if(word !== ""){
//         words.push(word)
//         word = ""
//     }
//     return words
// }

// function caps(word){
//     let res = String.fromCharCode(word.charCodeAt(0) - 32);
//     for (let i=1; i<word.length; i++){
//         res += word[i];
//     }
//     return res
// }
 
// function capitalized(sentence){
//     let arr = splitwords(sentence);
//     let res= ""
//     for(let i=0;i<arr.length; i++){
//         i<arr.length -1 ? res += caps(arr[i]) + " " : res += caps(arr[i])
//     }
//     console.log(res);
// }
// capitalized("hello everyone how are you i am good what about you")



// let str = "hello world how are you i am good what about you";
// let res = str.split(" ").map((word)=>word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
// console.log(res);


// 14.Write a program to check in a given number if their is any character return false.
// function checkNumber(str){
//     for(let i=0; i<str.length; i++){
//         let val = str.charCodeAt(i);
//         if(!(val>=48 && val<=57)){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkNumber("012345djnjdn6789"));

// 15.Find the most frequent character
// "Javascript" ---> "a"
// function mostFrequentChar(str){
//     let freq = {}
//     let i =0;
//     while(i<str.length){
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++
//     }
//     let max =1;
//     let char = "";
//     for(const key in freq){
//         if(freq[key]>max){
//             char = key
//         }
//     }
//     console.log(char);
// }
// mostFrequentChar("Javascript")