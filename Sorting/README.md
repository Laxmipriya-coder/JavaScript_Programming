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
