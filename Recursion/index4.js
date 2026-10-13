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

// console.log(findLength([2, 3, 1, 2, 4, 3], 7));
