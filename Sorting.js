// BUBBLE SORT
// let arr = [ 5, 3, 8, 1];
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<arr.length-1 ;j++){
//     if(arr[j] > arr[j + 1]){
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);


// SELECTION SORT
// let arr = [64, 25,12, 22, 11]
// for(let i=0; i<arr.length - 1; i++){
//   let mindex = i;
//   for(let j=i+1; j<arr.length; j++){
//     if(arr[j] < arr[mindex]){
//       mindex = j
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[mindex];
//   arr[mindex] = temp;
// }
// console.log(arr);

// INSERTION SORT
// let arr = [5,3,4,1,2]
// for(let i=1; i<arr.length; i++){
//   let key = arr[i];
//   let j = i-1;
//   while(j>=0 && arr[j] > key){
//     arr[j+1] = arr[j];
//     j--;
//   }
//   arr[j+1] = key;
// }
// console.log(arr);

// MERGE SORT
// function mergeSort(arr) {

//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(left, right) {

//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       result.push(left[i]);
//       i++;
//     }
//     else {
//       result.push(right[j]);
//       j++
//     }
//   }
//   return result.concat(left.slice(i), right.slice(j))
// }

// console.log(mergeSort([8,3,2,1]))

// QUICK SORT
// TAKE THE LAST ELEMENT AS PIVOT VALUE
// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let pivot = arr[arr.length -1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length -1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort([10,7,8,9,1,5]));


// TAKE FIRST INDEX AS PIVOT VALUE

// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let pivot = arr[0];
//     let left = [];
//     let right = [];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort([10,7,8,9,1,5]));



