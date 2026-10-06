# Array
----------------------------------------------------------
1. length --- it returns how many values present in an array.
# edit
2. push() --- it add an element in the last index.
3. pop() --- it removes an element in the last index.
4. unshift() --- it adds an element in the first index.
5. shift() --- it removes an element in the first index.
6. splice() --- it can remove or add the element at a time in any index position.
# Search / Check
7. indexOf() --- it returns the index position of an element.
let arr = [10,20,30,40];
let res = arr.indexOf(200);
console.log(res);
Output -1
Why


Method	    When not found
indexOf()	      -1
lastIndexOf()	  -1
findIndex()	      -1
includes()	     false
find()	        undefined
findLast()	    undefined

8. lastindexOf() --- it returns the last index position of an element.
9. includes() --- it checks whether an element is present in an array.
10. find() --- it returns the first element that satisfies a condition. and accept one call back function
11. findLast() --- it returns the last element that satisfies a condition.

# Add / Remove / Convert
12. concat() --- it joins two or more arrays and returns a new array.
13. slice() --- it copies a portion of an array into a new array without changing the original array.
14. join() --- it converts all array elements into a string and joins them with a separator.
15. flat() --- it converts nested arrays into a single-level array.
16. flatMap() --- it maps each element and then flattens the result.

# Loop / Iterate
17. forEach() --- it executes a function for each element in an array.
18. map() --- it creates a new array by changing each element.
19. filter() --- it creates a new array containing elements that satisfy a condition.
20. reduce() --- it reduces all array elements to a single value.(left to right)
21. reduceRight() --- it reduces all array elements to a single value from right to left.
22. some() --- it checks whether at least one element satisfies a condition.
23. every() --- it checks whether all elements satisfy a condition.
# Sorting / Reversing
24. sort() --- it sorts the elements of an array and change the original array.
25. reverse() --- it reverses the order of elements in an array and change the original array.
26. toSorted() --- it returns a new sorted array without changing the original array.
27. toReversed() --- it returns a new reversed array without chaning the original array.

# Special methods
28. at() --- it returns the element at a specified index. It can also access elements from the end using negative indexes.
29. toString() --- it converts an array into a string.

# Array Static Method
30. Array.isArray() --- it checks the whether a value is an array.
31. Array.from() --- it creates an array from an iterable or array like object.
32. Array.of() --- it creates a new array from the given values.
