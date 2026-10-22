// let str = "patra";
// let str1 = 'happy' + str;
// let str2 = "happy's" + str;
// let str3 = `h
// ap
// py ${str}`;


// let str = "abcdef";


// console.log(str.length)

// console.log(str[-1]);
// console.log(str.charAt(-1));
// console.log(str.at(-1));


// console.log(str.indexOf("z"));
// console.log(str.lastIndexOf("z"));


// console.log(str.includes("h"));


// console.log(str.startsWith("p"));
// console.log(str.endsWith("a"));

// console.log(str.slice(0));//patra
// console.log(str.slice(0,1));//p
// console.log(str.slice(2,4));//tr
// console.log(str.slice(-5));//patra
// console.log(str.slice(2,2));//""
// console.log(str.substring(3,5));//de
// console.log(str.substring(5,3));//de--->swapping takes place




// let mobile = "12345";
// console.log(mobile.padStart(10, "X"));  //XXXXX12345
// console.log(mobile.padEnd(10, "X"));    //12345XXXXX
// console.log(mobile.padStart(10, "X") + mobile); //XXXXX1234512345
// console.log(mobile.padEnd(10, "X") + mobile);   //12345XXXXX12345

// let str = "09azAZ";

// console.log(str.charCodeAt(0));     //48 ---->ASCII OF---->0
// console.log(str.charCodeAt(1));     //57 ---->ASCII OF---->9
// console.log(str.charCodeAt(2));     //97 ---->ASCII OF---->a
// console.log(str.charCodeAt(3));     //122 ---->ASCII OF---->z
// console.log(str.charCodeAt(4));     //65 ---->ASCII OF---->A
// console.log(str.charCodeAt(5));     //90 ---->ASCII OF---->Z


// 1.-->WAJSP TO FIND THE LENGTH OF A STRING.

// function findStringLength(str){
//     return str.length;
// }

// console.log(findStringLength("Happy"));


// 2.->WAJSP TO FIND THE LENGTH OF A STRING WITHOUT USING LENGTH PROPERTY.

// function findStringLength(str){
//     let i = 0;
//     while(str[i]){
//         i++;
//     }
//     console.log(i);
// }

// findStringLength('happy');


// 3.->WAJSP TO REVERSE A STRING.

// function reverseString(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     console.log(rev);
// }

// reverseString("happy");

// OR

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Happy"));


// 4.->WAJSP TO CHECK A GIVEN STRING IS A PALINDROME OR NOT.

// function isPalindrome(str) {
//     let i = 0; j = str.length - 1;
//     while (i != j) {     // i<=j
//         if (str[i] !== str[j])
//             return false;
//         i++;
//         j--;
//     }
//     return true;
// }

// console.log(isPalindrome("aab"));

// function isPalindrome(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return str === rev;
// }
// console.log(isPalindrome("aba"));


// OR

// function isPalindrome(str) {
// return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("abab"));


// 5.->WAJSP TO COUNT HOW MANY VAOWELS ARE IN A GIVEN STRING.

// function countVowels(str) {
//     let count = 0, vowels = "aeiou";
//     for (let i = 0; i <= str.length - 1; i++) {
//         if (vowels.includes(str[i]))
//             count++;
//     }
//     return count;
// }

// console.log(countVowels("aeiouaeiou"));

// OR

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
//             count++;
//     }
//     return count;
// }

// console.log(countVowels("Happy"));


// 6-->WAJSP TO FIND THE FREQUENCY OF EACH CHARACTER IN A STRING.

// function findCharacterFrequency(str) {
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     return freq;
// }

// console.log(findCharacterFrequency("Frequency"));


// 7-->WAJSP TO REMOVE DUPLICATE CHARACTER FROM A STRING.

// function removeDuplicate(str) {
//     let res = "";
//     let i = 0;
//     let freq = {}
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     for (let i in freq) {
//         res += i;
//     }
//     return res;
// }

// console.log(removeDuplicate("programming"));


//8--> WAJSP FIND THE FIRST NON-REPEATING CHARACTER IN A GIVEN STRING.

// function findFirstNonRepeatingChar(str) {
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     for (let key in freq) {
//         if (freq[key] == 1)
//             return key;
//     }
//     return null;
// }
// console.log(findFirstNonRepeatingChar("abcabcd"));



//9-->WAJSP TO FIND THE FIRST REPEATING CHARACTER IN A GIVEN STRING.

// function firstRepeatingCharacter(str) {
//     let i = 0;
//     let freq = {};
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     for (let key in freq) {
//         if (freq[key] > 1)
//             return key;
//     }
//     return null;
// }
// console.log(firstRepeatingCharacter("abbc"));


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
// console.log(countWords("  i am happy"));


//12.-->REVERSE THE WORDS IN A SENTENCE.

// function splitWords(str) {
//     let i = 0;
//     let words = [];
//     let word = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ")
//             word += char;
//         else {
//             if (word) {
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
//     return words;
// }

// function reverseSentence(sentence) {
//     let words = splitWords(sentence);
//     let rev = "";
//     for (let i = words.length - 1; i >= 0; i--) {
//         (i > 0) ? rev += words[i] + " " : rev += words[i];
//     }
//     return rev;
// }

// console.log(reverseSentence("   i am happy                "));


//13.--->WAJSP TO FIND THE LONGEST WORD IN A SENTENCE.

// function splitWords(str) {
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
//     return words;
// }

// function findLongestWord(sentence){
//     let words = splitWords(sentence);
//     let largest = words[0];
//     for(let i of words){
//         if(i.length>largest.length)
//             largest = i;
//     }
//     console.log(largest);

// }

// findLongestWord("Hii i am Happy from Odisha");


//14.-->CAPITALIZE THE FIRST LETTER OF EVERY WORD.

// function splitWords(str) {
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
//     return words;
// }

// function caps(word) {
//     let res = "";
//     for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (i === 0) {
//             let value = char.charCodeAt();
//             res += String.fromCharCode(value - 32);
//         }
//         else
//             res += char;
//     }
//     return res;
// }
// function capitalizeFirstLetter(sentence) {
//     let arr = splitWords(sentence);
//     let res = "";
//     for (let i = 0; i < arr.length; i++) {
//         i < arr.length - 1 ? res += caps(arr[i]) + " " : res += caps(arr[i]);
//     }
//     return res;
// }

// console.log(capitalizeFirstLetter(" i am happy"));


// OR

// function capitalizeFirstLetter(str) {
//     let i = 0;
//     let words = [];
//     let word = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ") {
//             word += char;
//             if (word.length == 1)
//                 word = String.fromCharCode(word.charCodeAt() - 32);
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


//15.-->WAJSP TO CHECK IF A STRING CONTAINS ONLY DIGITS.

// function checkNumbers(str) {
//     for (let i = 0; i < str.length; i++) {
//         let value = str[i].charCodeAt();
//         if (!(value >= 48 && value <= 57))
//             return false;
//     }
//     return true;
// }

// console.log(checkNumbers("12345"));


// OR

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


//16.-->WAJSP TO FIND THE MOST FREQUENT CHARACTER IN A STRING.

// function mostFrequentChar(str) {
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     let res = "";
//     let max = 1;
//     for (let key in freq) {
//         if (freq[key] > max) {
//             max = freq[key];
//             res = key;
//         }
//     }
//     if (max <= 1)
//         console.log(null);
//     else
//         console.log(res);
// }

// mostFrequentChar("Haoo");

// OR

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


//17.-->WAJSP TO REMOVE SPACES FROM A STRING.

// function removeSpace(str) {
//     let res = "";
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         if(char!=" ")
//             res+=char;
//         i++;
//     }
//     return res;
// }
// console.log(removeSpace("   Hello world    "));


//18.-->WAJSP TO COUNT OCCURENCE OF A SPECIFIC CHARACTER.

// function countOccurence(str, char) {
//     let count = 0, i = 0;
//     while (i < str.length) {
//         if (str[i] === char)
//             count++;
//         i++;
//     }
//     return count;
// }

// console.log(countOccurence("banana", "z"));


//19.-->WAJSP TO FIND THE SECOND MOST FREQUENT CHARACTER.

// function mostFrequentChar(str) {
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     let res = "";
//     let max = 1;
//     for (let key in freq) {
//         if (freq[key] > max) {
//             max = freq[key];
//             res = key;
//         }
//     }
//     if (max <= 1)
//         return null;
//     else
//         return res;
// }


// function findSecondMostFrequentChar(str) {
//     let char = mostFrequentChar(str);
//     let freq = {};
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     let secondMaxFreq = 0;
//     for (let key in freq) {
//         if (freq[key] !== freq[char]) {
//             if (freq[key] > secondMaxFreq) {
//                 secondMaxFreq = freq[key];
//             }
//         }
//     }
//     if (secondMaxFreq === 0) {
//         console.log("No second most frequent character");
//         return;
//     }
//     for (let key in freq) {
//         if (freq[key] === secondMaxFreq)
//             console.log(key);
//     }
// }

// findSecondMostFrequentChar("aabbcdcab");


//20.-->WAJSP TO REMOVE ALL OCCURENCE OF A GIVEN CHARACTER.

// function removeOccurence(str, char) {
//     let i = 0, res = "";
//     while (i < str.length) {
//         let currChar = str[i];
//         if (currChar !== char)
//             res += currChar;
//         i++;
//     }
//     return res;
// }

// console.log(removeOccurence("programming", "m"));


//21.-->WAJSP TO CHECK IF ONE STRING IS A ROTAION OF ANOTHER like:- "abcd"--->"cdab".


//22.-->WAJSP TO FIND THE DUPLICATE CHARACTER PRESENT IN STRING.

// function findDuplicateCharacter(str) {
//     let i = 0, freq = {}, duplicate = [];
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         i++;
//     }
//     for (let key in freq) {
//         if (freq[key] > 1)
//             duplicate.push(key);
//     }
//     console.log(duplicate.join());
// }
// findDuplicateCharacter("programming");


//23.-->WAJSP TO FIND THE LONGEST SUBSTRING WITHOUT REPEATING CHARACTER.

// function longestSubstring(str) {
//     let i = 0, freq = {}, long_substr = "";
//     while (i < str.length) {
//         let char = str[i];
//         freq[char] = (freq[char] || 0) + 1;
//         if (freq[char] <= 1)
//             long_substr += char;
//         else
//             return long_substr;
//         i++;
//     }
// }

// console.log(longestSubstring("abcdeddabc"));


//24.-->WAJSP TO FIND THE SHORTEST WORD IN A SENETENCE.

// function splitWords(str) {
//     let i = 0, words = [], word = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char !== " ")
//             word += char;
//         else {
//             if (word !== "") {
//                 words.push(word);
//                 word = "";
//             }
//         }
//         i++;
//     }
//     if (word !== "") {
//         words.push(word);
//         word = "";
//     }
//     return words;

// }

// function findShortestWord(str) {
//     let words = splitWords(str);
//     let shortest_word = words[0];
//     for (let i of words) {
//         if (i.length < shortest_word)
//             shortest_word = i;
//     }
//     return shortest_word;
// }

// console.log(findShortestWord("I love Javascript"));

//25.-->WAJSP TO COUNT UPPERCASE , LOWERCASE,DIGITS,AND SPECIAL CHARACTER IN A GIVEN STRING.

// function countCharacterTypes(str) {
//     let i = 0, upper = 0, lower = 0, digit = 0, special = 0;
//     while (i < str.length) {
//         let value = str[i].charCodeAt();
//         if (value >= 48 && value <= 57)
//             digit++;
//         else if (value >= 65 && value <= 90)
//             upper++;
//         else if (value >= 97 && value <= 122)
//             lower++;
//         else
//             special++;
//         i++;
//     }
//     console.log(`UpperCase : ${upper}, LowerCase : ${lower}, Digits : ${digit}, Special : ${special}`);
// }

// countCharacterTypes("Hello@123  ");

//26.-->WAJSP TO TOGGLE THE CASE OF EVERY CHARACTER.

// function toggleCharacter(str) {
//     let i = 0, toggle_str = "",value = 0;
//     while (i < str.length) {
//         value = str[i].charCodeAt();
//         if (value >= 65 && value <= 90) {
//             value += 32;
//             toggle_str+=String.fromCharCode(value);
//             // value = 0;
//         }
//         else if(value >= 97 && value <= 122){
//             value -= 32;
//             toggle_str+=String.fromCharCode(value);
//         }
//         else
//             toggle_str+=str[i];

//         i++;
//     }
//     return toggle_str;
// }

// console.log(toggleCharacter("Hello@ World"));


//27.--> WAJSP TO REPLACE EVERY SPACE WITH HYPEN.

// function replaceSpace(str) {
//     let i = 0, res = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char !== " ")
//             res += char;
//         else
//             res += "-";
//         i++;
//     }
//     return res;
// }

// console.log(replaceSpace("  Hello         World Js "));


//28.-->WAJSP TO FIND ALL WORDS THAT OCCUR MORE THAN ONCE.

// function findWordFrequency(str) {
//     let i = 0, word_freq = {}, word = "";

//     while (i < str.length) {
//         let char = str[i];
//         if (char != " ")
//             word += char;
//         else
//             if (word != "") {
//                 word_freq[word] = (word_freq[word] || 0) + 1;
//                 word = "";
//             }
//         i++;
//     }
//     if (word !== "") {
//         word_freq[word] = (word_freq[word] || 0) + 1;
//         word = "";
//     }
//     return word_freq;
// }

// function findWordsOccuredMoreThanOne(str){
//     let freq = findWordFrequency(str);
//     for(let key in freq){
//         if(freq[key]>1)
//             console.log(key);
//     }
// }

// findWordsOccuredMoreThanOne("java is easy and java is popular.");


//29.--.WAJSP TO CHECK IF TWO STRINGS ARE EXACTLY EQUAL WITHOUT USING ===.

// function checkEqualityOfTwoString(str1, str2) {
//     if (str1.length !== str2.length)
//         return false;
//     let i = 0, freq1 = {}, freq2 = {};
//     while (i < str1.length) {
//         if (str1[i] !== str2[i])
//             return false;
//         i++;
//     }
//     return true;
// }
// console.log(checkEqualityOfTwoString(" ",'a'));


// //30.-->WAJSP TO FIND LONGEST PALINDROMIC SUBSTRING IN A GIVEN STRING.

// function reverseString(str) {
//     let i = str.length - 1;
//     let rev = "";
//     while (i >= 0) {
//         rev += str[i];
//         i--;
//     }
//     return rev;
// }

// function longestPalindromicSubstr(str) {
//     let longest_substr = "";
//     for (let i = 0; i < str.length; i++) {
//         let word = "";
//         for (let j = i; j < str.length; j++) {
//             let char = str[j];
//             if (char !== ' ') {
//                 word += char;
//                 if (word === reverseString(word) && word.length > longest_substr.length) {
//                     longest_substr = word;
//                 }
//             }
//         }
//     }
//     return longest_substr;
// }
// console.log(longestPalindromicSubstr("babdadada"));


//31.-->WAJSP TO COMPRESS CONSECUTIVE REPEATED CHARACTER IN A GIVEN STRING.

// function compressString(str) {
//     let i = 0, count = 1; res = "";
//     while (i < str.length) {
//         if (i === 0)
//             res += str[i];
//         else {
//             if (str[i] === str[i - 1]) {
//                 count++;
//             }
//             else {
//                 res += str[i]+`${count}`;
//                 count = 1;
//             }
//         }
//         i++;
//     }
//     return res;
// }

// console.log(compressString("aaabbcccdccc"));//a3b2c3d1c3




// function longestSubstr(str) {
//     let i = 0, arr = [], substr = "";
//     while (i < str.length) {
//         let char = str[i];
//         if (char !== " ") {
//             if (substr.includes(char)) {
//                 arr.push(substr);
//                 substr = "";
//                 substr += char;
//             }
//             else
//                 substr += char;
//         }
//         i++;
//     }
//     let longest = arr[0];
//     for (let i of arr) {
//         if (i.length > longest.length)
//             longest = i;
//     }
//     console.log(longest);
// }
// longestSubstr("abcabdcdd")









