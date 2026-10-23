// function quicksort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let pivot = arr[0];
//     let left = [],right = [];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)];
// }
// console.log(quicksort([10,7,8,9,1,6]));


// let arr = ["Apple","Orange","Banana","Grapes"];
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// MOVE ALL THE ZERO'S TO THE END
// let arr = [10,0,5,6,8,0,52,0];
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j] < arr[j+1]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);



// let arr = [10,9,8,1,7,5];
// for(let i=0;i<arr.length; i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// function quicksort(arr){
//     if(arr.length <=1){
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)];
// }
// console.log(quicksort([10,7,8,9,1,5]));


// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length - 1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);
// for(let i=0; i<arr.length - 1; i++){
//     let min = i;
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j] < arr[min]){
//             min = j
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     let key = arr[i], j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--
//     }
//     arr[j+1] = key;
// }
// console.log(arr);

// function quicksort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let pivot = arr[arr.length-1];
//     let left = [], right= [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]; 
// }
// console.log(quicksort([5, 3, 1, 4, 2]));


// function quicksort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length - 1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)];
// }
// console.log(quicksort([5,3,1,4,2]));

// let arr = [5,3,1,4,2];
// for(let i=1; i<arr.length; i++){
//     let key = arr[i];
//     let j= i-1;
//     while(j>=0 && arr[j] > key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] =key
// }
// console.log(arr);

// function quickSort(arr){
//     if(arr.length <=1){
//         return arr;
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort([5,2,4,1,3]));

// function mergesort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2);
//     let left = mergesort(arr.slice(0,mid));
//     let right = mergesort(arr.slice(mid));
//     return merge(left,right);
// }
// function merge(left,right){
//     let res = [];
//     let i=0;
//     let j=0;
//     while(i<left.length && j<right.length){
//         if(left[i] <= right[j]){
//             res.push(left[i]);
//             i++
//         }
//         else{
//             res.push(right[j]);
//             j++
//         }
//     }
//     return res.concat(left.slice(i),right.slice(j))
// }
// console.log(mergesort([5,1,4,3,2]));

// function quickSort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// console.log(quickSort([5,3,4,2,1]));







let arr = [5,2,3,1,4]
for(let i =0;i<arr.length; i++){
    
}