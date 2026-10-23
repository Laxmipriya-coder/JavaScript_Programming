# Searching Algorithm
A searching algorithm  is a step-by-step procedure used to find a particular element(called the target or key) in a collection of data, such as an array.

# Types of Searching Algorithm
1. Linear Search
           Checks elements one by one until the target is found or the collection ends.
2. Binary Search
           Repeatedly divides a sorted search range into two halves.

# 1. Linear Search
Linear search is a searching algorithm that checks each element in a collection sequentially, starting from the first element, until the target is found or all elements have been checked. It is also called sequential Search.

# Algorithm
1. Starts from index 0;
 
2. Compare the current element with the target.

3. if they are equal, return the current index.

4. Otherwise, move to the next element.

5. If the loop finishes without finding the target, return -1.

# Example
function linear(arr,tar){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == tar){
            return i
        }
    }
    return -1;
}
console.log(linear([5,1,3,2,6],3))

# 2. Binary Search
Binary search is a searching algorithm that find a target element in a sorted array by repeatedly dividing the current search range into two halves.

Instead of checking every element, it eliminates half of the remaining search space after each comparison.

# Important Rule 
Binary search requires the array to be sorted in ascending or descending order.The code below assumes ascending order.

# Algorithm
1. Initializes left = 0  and right = arr.length -1;

2. While left <= right, calculate the middle index.

3. If the middle element equals the target, return mid.

4. If the target is greater than middle element, set left = mid + 1;

5. If the target is smaller than the middle element, set right = mid - 1;

6. If the search range becomes empty, return - 1;
