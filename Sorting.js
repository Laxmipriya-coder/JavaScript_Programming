// Bubble Sort
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


// Selection Sort
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

// Insertion Sort
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

// Merge Sort
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

// Quick Sort
