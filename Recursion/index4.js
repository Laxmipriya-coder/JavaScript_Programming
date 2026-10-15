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

function Sum(a,b){
    return a+b;
}
console.log(Sum(5,3));