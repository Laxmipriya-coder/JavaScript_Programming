// LINEAR SEARCH
// function linearSearch(arr,tar){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == tar){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([5,3,1,2],1));

// BINARY  SEARCH
// function binarySearch(arr,tar){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left <= right){
//         let mid = Math.floor((left + right ) / 2);
//         if(arr[mid] === tar){
//             return tar;
//         }
//         if(tar > arr[mid]){
//             left  = mid + 1;
//         }
//         if(tar < arr[mid]){
//             right = mid -1;
//         }
//     }
//     return -1
// }
// console.log(binarySearch([5,3,2,4,1],5));

