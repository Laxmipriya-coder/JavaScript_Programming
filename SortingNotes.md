# Sorting algorithm in JavaScript
1. What is Sorting?
Sorting is the process of arranging elements in a particular order.
There are two common types of sorting algorithm- 

Ascending Order: Arranging elements from smallest to largest.

Descending Order: Arranging elements from largest to smallest.

Example: 
let arr = [40,10,30,20,50]
<!-- Ascending Order
[10, 20, 30, 40, 50] -->

<!-- Descending Order
[50, 40, 30, 20, 10] -->

# Types of Sorting Algorithms

The important sorting algorithms are:

1. Bubble Sort

2. Selection Sort

3. Insertion Sort

4. Merge Sort

5. Quick Sort

6. Heap Sort

# 1. Bubble Sort
Bubble sort is a sorting algorithm that compares adjacent elements and swap them if they are in the wrong order.

After each pass, the largest unsorted element moves to its correct position at the end of the array.
# Algorithm
1. Start from the first element.

2. Compare the current element with the next element.

3. If the current element is greater than the next element, swap them.

4. Continue until the end of the unsorted portion.

5. Repeat until the array is sorted.

Example:

let arr = [ 5, 3, 8, 1];
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length-1 ;j++){
    if(arr[j] > arr[j + 1]){
      let temp = arr[j];
      alrr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

# Advantages
Easy to understand and implement.
Works well for small arrays used in learning.
Requires very little additional memory.

# Disadvantages
Inefficient for large arrays.
Performs many comparisons and swaps.


# 2.Selection Sort
Selection sort repeatedly finds the smallest element from the unsorted portion and places it at the beginning of that portion.

# Algorithm
1. Assume the first unsorted element is the minimum.

2. Compare it with the remaining elements.

3. Find the index of the smallest element.

4. Swap the smallest element with the first unsorted element.

5. Repeat untill the array is sorted.

Example

let arr = [64, 25,12, 22, 11]
for(let i=0; i<arr.length - 1; i++){
  let mindex = i;
  for(let j=i+1; j<arr.length; j++){
    if(arr[j] < arr[mindex]){
      mindex = j
    }
  }
  let temp = arr[i];
  arr[i] = arr[mindex];
  arr[mindex] = temp;
}
console.log(arr);

# 3.Insertion Sort
Insertion Sort takes one element at a time and inserts it into the correct position within the already-sorted portion of the array.

It works similarly to arranging playing cards in your hand.
# Algorithm
1. Consider the first element sorted.

2. Take the next element as the key.

3.Compare the key with elements on its left.

4. Shift larger elements one position to the right.

5. Insert the key into the correct position.

6. Repeat until the array is sorted.

Example : 

let arr = [5,3,4,1,2]
for(let i=1; i<arr.length; i++){
  let key = arr[i];
  let j = i-1;
  while(j>=0 && arr[j] > key){
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = key;
}
console.log(arr);

# 4. Merge Sort
Merge sort is a divide and conqure sorting algorithm.
It divides an array into smaller parts, sorts those parts recursively and merges them into one sorted array.

# Algorithm
1. divide the array into two halves.

2. Continue dividing until each part contains one element.

3. Merge the smaller arrays in sorted order.

4. Continue merging until one sorted array remains.

Example:

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {

  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    }
    else {
      result.push(right[j]);
      j++
    }
  }
  return result.concat(left.slice(i), right.slice(j))
}

console.log(mergeSort([8,3,2,1]))

# 5.Quick Sort
Quick sort is a divide and conqure algorithm that selects a pivot element and partitions the other elements into groups based on their relationship to the pivot.

The smaller elements are placed on one side, and the larger elements are placed on the other side.

# Algorithm
1. Select a pivot element.

2. Partition the other element into smaller and larger groups.

3. Apply Quick Sort recursively to each group.

4. Combine the sorted groups with the pivot.

Example: 
function quicksort(arr){
  if(arr.length <= 1 ){
    return arr
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] <= pivot){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])
    }
  }
  return [...quicksort(left) , pivot , ...quicksort(right)]
}
console.log(quicksort([10,8,7,9,1,5]))

# 6.Heap Sort
Heap sort uses a binary heap data structure to store elements
For ascending order, it commonly builds a max heap, where the largest element is at the root.

# Algorithm
1. Build a max heap from the array.

2. Swap the root with the last element.

3. Reduce the heap size.

4. Restore the max-heap property.

5. Repeat until the array is sorted.