//1. PRINT 1 TO 100 WITHOUT USING LOOP 
// function demo(n){
//     if(n>100){
//         return;
//     }
//     console.log(n);
//      demo(n+1);
// }
// demo(1)

//2.WRITE THE PROGRAM TO PRIINT THE SUM OF 1 TO 5 NUMBERS USING RECURSION
// function sum(n){
//     if(n===0)
//         return 0;
//     return n+ sum(n-1)
// }
// console.log(sum(5))


// 3.WRITE THE PROGRAM TO PRIINT THE FACTORIAL OF 1 TO 5 NUMBERS USING RECURSION 
// function fact(n){
//     if(n===1)
//         return n;
//     return n * fact(n-1)
// }
// console.log(fact(5));


// 4.CALCULATE THE NUMBER RAISED TO A POWER. DON'T USE MATH.POWER() OR **;
// when two number we have to give both number and power
// function power(n,p){
//     if(p===0)
//         return 1;
//     return n * power(n,p-1);
// }
// console.log(power(3,3));

// ANOTHER WAY

// ANOTHER WAY
// When we have to give only one number
// function power(n,exponent = n){
//     if(exponent === 0)
//         return 1
//     return n * power(n,exponent-1);
// }
// console.log(power(5));

// 6.COUNT THE NUMBER OF DIGITS USING RECURSION
// function count(n){
//     if(n===0)
//         return 0;
//     return 1+ count(Math.floor(n/10));
// }
// console.log(count(1000));

// 7 FIND THE SUM OF DIGITS
// function sumdigit(n){
//     if(n===0)
//         return n
//     let res = sumdigit(Math.floor(n/10));
//     return (n%10) + res
// }
// console.log(sumdigit(123));

// 8.REVERSE A STRING
// function reverse(n){
//     if(n===0){
//         return "";
//     }
//     let res = reverse(Math.floor(n/10));
//     return (n%10)+ res;
// }
// console.log(reverse(100));
// 9.CHECK IF A STRING IS A PALINDROME OR NOT
// function palindrome(str){
//     if(str.length <= 1){
//         return true;
//     }
//     if(str[0] !== str[str.length - 1]){
//         return false;
//     }
//     return palindrome(str.substring(1,str.length - 1))
// }
// console.log(palindrome("125"));

// 10.FIND THE MAXIMUM NUMBER IN AN ARRAY
// function max(arr){
//     if(arr.length === 1){
//         return arr[0];
//     }
//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     if(first > last ){
//         arr.length = arr.length -1;
//     }
//     else{
//         arr[0] = last;
//         arr.length = arr.length -1
//     }
//     return max(arr);
// }
// console.log(max([10,50,74,12,23]));

// 1.WRITE A JAVASCRIPT PROGRAM TO FIND DUPLICATE ELEMENTS IN AGIVEN ARRAY
// let arr = [10, 20, 50, 30, 20, 50, 80, 90]
// let obj = {};
// let copy = [];
// let uni = [];
// for (let i = 0; i < arr.length; i++) {
//     let digit = arr[i];
//     obj[digit] = (obj[digit] || 0) + 1;
// }
// for (let key in obj) {
//     if (obj[key] > 1) {
//         copy.push(key)
//     }
//     else{
//        uni.push(key) 
//     }
// }
// console.log(copy);
// console.log(uni);
// console.log(obj);

// TWO POINTER APPROACH
// function findDuplicateElements(arr){
//     let res = [];
//     for(let i=0;i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 if(! res.includes(arr[i])){
//                     res.push(arr[i]);
//                 }
//             }
//         }
//     }
//     console.log(res);
// }
// findDuplicateElements([10,20,80,50,10,50,30,50,60,50]);

// FIND THE TWO ELEMENTS IN AN GIVEN ARRAY WHERE THE BOTH OF SUM IS EQUAL WITH TARGET ELEMENTS
// function targetEle(arr,tar){
//     let res = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j] === tar){
//                 res.push([arr[i],arr[j]])
//             }
//         }
//     }
//     console.log(res);
// }
// targetEle([1,3,4,6,13,7],7);

// REMOVE DUPLICATE DIGIT FROM AN ARRAY

// function removeDuplicates(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!res.includes(arr[i])) {
//             res.push(arr[i]);
//         }
//     }
//     console.log(res);
// }

// removeDuplicates([10, 20, 80, 50, 10, 50, 30, 50, 60, 50]);

// function removeDuplicates(arr){
//     let res =[];
//     for(let i=0; i<arr.length; i++){
//         let count =0;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]  === arr[j]){
//                 count++;
//                 break;
//             }
//         }
//         if(count === 0){
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
// }
// removeDuplicates([10,50,60,30,80,10,50,20])

// function checkString(str) {
//     let upper = 0, lower = 0, number = 0, special = 0
//     for (let i = 0; i < str.length; i++) {
//         let ch = str.charCodeAt(i);
//         if (ch >= 65 && ch <= 90) {
//             upper = 1;
//         }
//         else if (ch >= 97 && ch <= 122) {
//             lower = 1;
//         }
//         else if (ch >= 48 && ch <= 57) {
//             number = 1;
//         }
//         else {
//             special = 1;
//         }
//     }

//     if (upper && lower && special && number && str.length >= 8) {
//         console.log("Valid String");
//     } else {
//         console.log("Invalid String");
//     }
// }
// checkString("TKKJGG@123");

// function greet(name,age){
//     this.name = name
//     this.age = age
// }
// console.log(Object.prototype)

// SLiding Window Technique we can do in 2 ways 
// fix window size and dynamic window size
// 1. FIND THE SUM OF EVERY CONSECUTIVE WINDOW OF SIZE K LET ARR = [2,4,6,8] ; LET K = 3; OUTPUT = 12,18,24;
// function element(arr,k){
//     let sum = 0;
//     for(let i=0; i<k; i++){
//         sum += arr[i]
//     }
//     console.log(sum);
//     for(let i=k; i<arr.length; i++){
//         sum = sum + arr[i] - arr[i-k];
//         console.log(sum);
//     }
// }
// element([2,4,6,8,10],3);

// 2.FIND THE MAXIMUM SUM OF K CONSECUTIVE ELEMENTS LET ARR=[2,1,5,1,3,2]; LET K = 3; OUT:9 tHE MAXIMUM SUM COMES FROM [5,1,3];
// function maxSum(arr, k) {
//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//     }
//     let max = sum;
//     let s = 0;
//     for (let i = k; i < arr.length; i++) {
//         sum = sum + arr[i] - arr[i - k];
//         if (sum > max) {
//             max = sum
//             s = i-k +1;
//         }
//     }
//     console.log("The maximum sum is "+  max);
//     console.log("The Maximum Sum comes from ", arr.slice(s, s + k));
// }

// maxSum([2,1,5,1,3,2],3)

// 3.FIND THE MINIMUM SUM OF K CONSECUTIVE ELEMENTS LET ARR=[4,2,1,7,3,2]; LET K = 3; OUT:7 tHE MINIMUM SUM COMES FROM [4,2,1];
// function maxSum(arr, k) {
//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//     }
//     let max = sum;
//     let s = 0;
//     for (let i = k; i < arr.length; i++) {
//         sum = sum + arr[i] - arr[i - k];
//         if (sum < max) {
//             max = sum
//             s = i-k +1;
//         }
//     }
//     console.log("The maximum sum is "+  max);
//     console.log("The Maximum Sum comes from ", arr.slice(s, s + k));
// }
// maxSum([4,2,1,7,3,2],3)

// 4.FIND THE AVERAGE OF EVERY K CONSECUTIVE ELEMENTS LET ARR = [2,4,6,8,10] LET K=3; OUTPUT 4,6,8
// EXPLANATION THE WINDOW SUMS ARE 12, 18 AND 24 DIVIDE EACH BY 3;
//  function element(arr,k){
//     let sum = 0;
//     for(let i=0; i<k; i++){
//         sum += arr[i]
//     }
//     let avg = sum/k
//     console.log(avg);
//     for(let i=k; i<arr.length; i++){
//         sum = sum + arr[i] - arr[i-k];
//         console.log(sum/k);
//     }
// }
// element([2,4,6,8,10],3);

// 6.FIND THE FIRST WINDOW WHOSE SUM IS GREATER THAN A TARGET LET ARR = [1,2,3,4,5] ; LET K = 2; LET TAR = 6; OUTPUT=[3,4];
// function greatertarget(arr,k){
//     let sum = 0;
//     for(let i=0; i<k; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
//     let tar = 6;
//     for(let i=k; i<arr.length;i++){
//         sum = sum + arr[i] - arr[i-k];
//         if (sum > tar) {
//             console.log(arr.slice(i - k + 1, i + 1));
//             return;
//         }
//     }
// }
// greatertarget([1,2,3,4,5],2)

// DYNAMIC WINDOW TECHNIQUE
// FIND THE LENGTH OF THE LONGEST CONTIGUOUS SUBARRAY WHOSE SUM IS LESS THAN OR EQUAL TO 7 INPUT:[2,1,5,1,3,2] OUTPUT 3
// function findLength(arr,k){
//     let sum = 0;
//     let left = 0;
//     let maxlength = 0;
//     let right;
//     for(right=0; right <arr.length; right++){
//         sum = sum + arr[right];
//         while(sum > k){
//             sum = sum - arr[left];
//             left ++;
//         }
//         let length = right - left + 1;
//         maxlength = Math.max(maxlength,length);
//         var res = arr.slice(left,right +1)
//     }
//     console.log(maxlength);
//     console.log(res)
// }
// findLength([2,1,5,1,3,2,1],7)


// 2.FIND THE LENGTH OF THE LONGEST CONTIGUOUS SUBARRAY WHOSE SUM IS ATLEAST 7 ARR = [2,1,5,1,3,2] OUTPUT 3

// function findLength(arr, k) {
//     let sum = 0;
//     let left = 0;
//     let minlength = Infinity;
//     for (let right = 0; right < arr.length; right++) {
//         sum = sum + arr[right];
//         while (sum >= k) {
//             let length = right - left + 1;
//             minlength = Math.min(minlength, length);
//             sum = sum - arr[left];
//             left++;
//         }
//     }
//     return minlength == Infinity ? 0 : minlength;
// }

// console.log(findLength([2, 3, 1, 2, 4, 3], 10));


//3. FIND THE LENGTH OF THE LONGEST SUBSTRING THAT CONTAINS NO REPEATED CHARACTERS
// function longestSubstring(str) {
//     let left = 0;
//     let maxLength = 0;
//     let set = new Set();
//     for(let right =0; right <str.length; right++){
//         while(set.has(str[right])){
//             set.delete(str[left]);
//             left ++;
//         }
//         set.add(str[right]);
//         let length = right - left +1;
//         maxLength = Math.max(maxLength,length)
//     }
//     return maxLength;
// }

// console.log(longestSubstring("abcabcbb"));   // 3

// Set Methods
// A  Set is a built-in JavaScript object that stores unique values. 
// It does not store duplicate values.
// Remember: An array can contain duplicate values, but a Set keeps only unique values.
// A Set also preserves the insertion order of its unique values.


// Set dont allow to use duplicate values
// Methods of Sets
// 1. add() - adding values
// 2.has() - check the value is present or not
// 3.delete() - delete the particular element
// 4.clear() - clear all the elements from an set
// 5.size() - check the size of a set.
// let s1 = new Set();
// s1.add(10);
// s1.add(100);
// s1.add(1000);
// console.log(s1);
// console.log(s1.size);
// console.log(s1.has(50));  
// s1.clear();
// console.log(s1);

// WRITE A JS PROGRAM TO REMOVE DUPLICATE CHARACTERS FROM GIVEN STRING
// let s1 = new Set("abcabcbb");
// console.log(s1);

// MAP METHODS
// 1.set()
// 2.get()
// 3.delete()
// 4.has();
// 5.size()
// 6.clear()
// let m1 = new Map();
// m1.set(1,"Laxmi");
// m1.set(2,"Priya");
// console.log(m1.get(1));

// console.log(m1.get(2));
// m1.delete(1);
// console.log(m1.size);
// console.log(m1.has(2));
// console.log(m1.has(1));
// m1.clear();
// console.log(m1);
