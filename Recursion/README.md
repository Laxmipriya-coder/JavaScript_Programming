 # Recursion
Recursion is when a function call itself to solve a smaller version of the problem.
Every Recursion function has two parts 
# Set
--->A  Set is a built-in JavaScript object that stores unique values.
--->It does not store duplicate values.
--->Remember: An array can contain duplicate values, but a Set keeps only unique values. A Set also preserves the insertion order of its unique values.

# How do we create a Set?
There are three common ways to start working with a Set.
Create an empty Set let set = new Set();
Create a Set from an array let set = new Set([1, 2, 3, 2, 1]);
Create a Set from a string let set = new Set("banana");

# Important Set methods
add() Adds a value to the Set. If that value already exists, nothing is duplicated.
has() Checks whether a value exists. It returns true or false.
delete() Removes a specific value from the Set.
clear() Removes every value from the Set.
size Returns the number of unique values. Note that size is a property, not a method.

# Other useful ways to work with set
let set = new Set([10,20,30]);
--->for Loop
for(let value of set){
    console.log(value)
}
--->forEach()
execute a callback for each value let set = new Set(["A", "B", "C"]);
set.forEach(function(value) { console.log(value); });