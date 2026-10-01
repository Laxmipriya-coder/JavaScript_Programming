
// let str = "I Love JavaScript";
// let res = str.split(" ").reverse().join(" ");
// console.log(res);

// let str = "I love Javascript";
// let res = "";
// let letter = "";

// for(let i=0; i< str.length; i++){
//     if(str[i] !== " "){
//         letter += str[i];
//     }
//     else{
//         res = letter + " " + res;
//         letter= "";
//     }
// }
// res = letter + " " + res;
// console.log(res);

// 12.Find the longest word in a sentence
// "I love Programming"

// //10. WAJSP TO CHECK WHEATHER TWO STRING ARE ANAGRAM OR NOT.
// function isAnagram(str1, str2) {
//     if (str1.length === str2.length) {
//         let freq1 = {};
//         let freq2 = {};
//         let i = 0;
//         while (i < str1.length) {
//             let char1 = str1[i];
//             let char2 = str2[i];
//             freq1[char1] = (freq1[char1] || 0) + 1;
//             freq2[char2] = (freq2[char2] || 0) + 1;
//             i++;
//         }
//         for (let key in freq1) {
//             if (freq1[key] !== freq2[key])
//                 return false;
//         }
//         return true;

//     }
//     return false;

// }
// console.log(isAnagram("aba", "aab"));


//11.-->WAJSP COUNT THE NUMBER OF WORDS IN A STRING.

// function countWords(str) {
//     let i = 0;
//     let words = [];
//     let word = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ")
//             word += char;
//         else {
//             if (word != "") {
//                 words.push(word);
//                 word = "";
//             }
//         }
//         i++;
//     }
//     if (word != "") {
//         words.push(word);
//         word = "";
//     }
//     return words.length;
// }

// console.log(countWords(" i am happy"));


//12.-->REVERSE THE WORDS IN A SENTENCE.

// function reverseWords(str) {
//     let i = 0;
//     let words = [];
//     let word = "", rev = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ")
//             word += char;
//         else {
//             if (word != "") {
//                 words.push(word);
//                 word = "";
//             }
//         }
//         i++;
//     }
//     if (word != "") {
//         words.push(word);
//         word = "";
//     }
//     for (let i = words.length - 1; i >= 0; i--) {
//         rev += words[i]+" ";
//     }
//     return rev;
// }

// console.log(reverseWords("   i am happy"));


//13.-->CAPITALIZE THE FIRST LETTER OF EVERY WORD.

// function capitalizeFirstLetter(str) {
//     let i = 0;
//     let words = [];
//     let word = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ") {
//             word += char;
//             if (word.length == 1)
//                 word = word.toUpperCase();
//         }
//         else {
//             if (word != "") {
//                 words.push(word);
//                 word = "";
//             }
//         }
//         i++;
//     }
//     if (word != "") {
//         words.push(word);
//         word = "";
//     }
//     return words.join(" ");
// }

// console.log(capitalizeFirstLetter(" i am happy"));


//14.-->WAJSP TO CHECK IF A STRING CONTAINS ONLY DIGITS.

// function checkOnlyDigit(str) {
//     str = str.trim();
//     if (str === "")
//         return false;
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         if (char === " ")
//             return false;
//         else {
//             if (isNaN(Number(char)))
//                 return false;
//         }
//         i++;
//     }
//     return true;
// }

// console.log(checkOnlyDigit(" 45 5"));


//15.-->WAJSP TO FIND THE MOST FREQUENT CHARACTER IN A STRING.

// function mostFrequentChar(str) {
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     let arr = Object.values(freq);
//     let max = arr.reduce((acc, ele) => acc > ele ? acc : ele);
//     for (let key in freq) {
//         if (freq[key] === max)
//             console.log(key);
//     }
// }

// mostFrequentChar("Happzzzzzyy");