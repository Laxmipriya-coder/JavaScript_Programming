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
 function element(arr,k){
    let sum = 0;
    for(let i=0; i<k; i++){
        sum += arr[i]
    }
    let avg = sum/k
    console.log(avg);
    for(let i=k; i<arr.length; i++){
        sum = sum + arr[i] - arr[i-k];
        console.log(sum/k);
    }
}
element([2,4,6,8,10],3);