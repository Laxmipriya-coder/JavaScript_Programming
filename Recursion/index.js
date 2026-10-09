0//1. PRINT 1 TO 100 WITHOUT USING LOOP 
// function demo(n){
//     if(n>100){
//         return;
//     }
//     console.log(n);
//      demo(n+1);
// }
// demo(1)

//2.WRITE THE PROGRAM TO PRIINT THE SUM OF 1 TO 5 NUMBERS USING RECURSION
// function sum(n){
//     if(n===0)
//         return 0;
//     return n+ sum(n-1)
// }
// console.log(sum(5))


// 3.WRITE THE PROGRAM TO PRIINT THE FACTORIAL OF 1 TO 5 NUMBERS USING RECURSION 
// function fact(n){
//     if(n===1)
//         return n;
//     return n * fact(n-1)
// }
// console.log(fact(5));


// 4.CALCULATE THE NUMBER RAISED TO A POWER. DON'T USE MATH.POWER() OR **;
// when two number we have to give both number and power
// function power(n,p){
//     if(p===0)
//         return 1;
//     return n * power(n,p-1);
// }
// console.log(power(3,3));

// ANOTHER WAY

// function power(n){
//     if(n==1)
//         return 6;
//     return 6 * power (n-1);
// }
// console.log(power(5))

// ANOTHER WAY
// When we have to give only one number
// function power(n,exponent = n){
//     if(exponent === 0)
//         return 1
//     return n * power(n,exponent-1);
// }
// console.log(power(5));

// 6.COUNT THE NUMBER OF DIGITS USING RECURSION
// function count(n){
//     if(n===0)
//         return 0;
//     return 1+ count(Math.floor(n/10));
// }
// console.log(count(1000));

// 7 FIND THE SUM OF DIGITS
// function sumdigit(n){
//     if(n===0)
//         return n
//     let res = sumdigit(Math.floor(n/10));
//     return (n%10) + res
// }
// console.log(sumdigit(123));

// 8.REVERSE A STRING
// function reverse(n){
//     if(n===0){
//         return "";
//     }
//     let res = reverse(Math.floor(n/10));
//     return (n%10)+ res;
// }
// console.log(reverse(100));
// 9.CHECK IF A STRING IS A PALINDROME OR NOT
// function palindrome(str){
//     if(str.length <= 1){
//         return true;
//     }
//     if(str[0] !== str[str.length - 1]){
//         return false;
//     }
//     return palindrome(str.substring(1,str.length - 1))
// }
// console.log(palindrome("125"));

// 10.FIND THE MAXIMUM NUMBER IN AN ARRAY
function max(arr){
    if(arr.length === 1){
        return arr[0];
    }
    let first = arr[0];
    let last = arr[arr.length - 1];
    if(first > last ){
        arr.length = arr.length -1;
    }
    else{
        arr[0] = last;
        arr.length = arr.length -1
    }
    return max(arr);
}
console.log(max([10,50,74,12,23]));