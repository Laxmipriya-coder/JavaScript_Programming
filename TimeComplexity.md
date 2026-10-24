# What is Time Complexity
Time complexity is a way to describe how the number of operations performed by an algorithm grows as the input size increases.

In simple word, It helps us understand how the amount of work an algorithm performs changes when we give it more data.

For Example, imagine you have an array containing 5 elements. You want to print every element.

const arr = [10,20,30,40,50];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}

The loop executes 5 times. Now imagine the array contains 100 elements. The loop executes 100 times. Input size (n) Loop executions 5 5 10 10 100 100 1,000 1,000 10,000 10,000

As the input size increases, the number of loop executions increases proportionally.

Therefore the time complexity is O(n), called linear time.

# Important
Time complexity does not usually mean the exact number of seconds your program takes. It describes how the work grows with input size.

# What is Big O Notation?
Big O Notation is a mathematical notation used to describe an algorithms upper bound growth rate as its input size increases.

In every DSA discussions, we use it to express the time or extra space an algorithm needs as the input grows.

# Example:
O(1) --- Constant Growth
O(n) --- Linear Growth
O(n²) --- Quadratic Growth

Big O helps us compare algorithms without depending on a particular computer, processor speed, or programming language. Common Big O complexities

# How do we calculate Big O notation?
This is the most important part to understand.
You don't need to run the code to calculate Big O.
You can often determine it by analyzing the operations and how loops or recursive calls grow with the input size.

# Rules of Big O Notation
# Rule 1 -- Ignore constants
function printNumbers(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    for(let i=0; i<arr.length; i++){
        console.log(arr[i] * 2)
    }
}

Suppose the array has n elements

---> First loop executes n times
---> Second loop executes n times.
---> Total loop executions: n+n = 2n.
So the complexity is initially expressed as O(2n).

But Big O ignores constant multipliers. Therefore:
O(2n) = O(n)
------ Final Time Complexity: O(n).

# Rule 2 -- Ignore Lower-order Terms
function example(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
    for(let i=0; i< n*n; i++){
        console.log(i);
    }
}

The first loop executes n times, and the second executes n² times.
Total work : T(n) = n+n²;

The n² term grows much faster than the n term as n increases. So we ignore the lower-order

------ Final Time Complexity: O(n²)

# Rule 3 -- Consecutive loops are added
function example(arr){
    for(let i=0; i< arr.length; i++){
        console.log(arr[i]);
    }
    for(let i=0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

Both loops execute independently, one after the other. T(n) = n+n = 2n
After ignoring the constant.
Time Complexity: O(n) 
Remember: two consecutive loops do not automatically mean(O(n²))

# Rule 4 -- Nested loops are usually multiplied
function example(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i,j);
        }
    }
}

let n = 3;

Theouter loop executes 3 times. for each outer iteration, the inner loop executes 3 times.

Total execution : T(n) = n*n = n²

For n = 3 there are 9 execution
For n=100 there are 10,000 executions.

---- Final time complexity: O(n²);

# Useful Rule
Consecutive loops : generally add their work.
Nested Loops: Multiply their iteration counts when the inner loop runs fully for every outer iteration. Always inspect the actual loop bound, not every nested loop is quardtic.

# Rule 5 Look at how the loop variable changes
function example(n){
    for(let i=1; i< n; i= i*2){
        console.log(i);
    }
}

Suppose n = 16.

The values of i are:

1 → 2 → 4 → 8

The loop stops when i becomes 16. Each iteration doubles the value, so it takes approximately log_2(n) iterations to reach n.

---- Final time complexity: O(log n)

Compare the following: Loop update Typical complexity i++ O(n) i += 2 O(n) i *= 2 O(log n) i /= 2 O(log n) when starting from n and moving toward 1.

# Important Table For Big O Notation
-------------------------------------------
|          i++/i-- --->  O(n)             |
|          i += 2 ---> O(n)               |     
|          i *=2 ---> O(log n)            |
|          i /=2 ---> O(log n)            |
--------------------------------------------
