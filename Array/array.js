// let data = [10,20,30,50,60,20,80];
// console.log(data.includes(20));
// console.log(data.indexOf(20));
// console.log(data.lastIndexOf(20));

// let s1 = [
//     {name:"laxmi",age:22},
//     {name:"priya",age:25},
//     {name:"laxmi",age:24}
// ]
// let res = s1.find(ele=> ele.name === "laxmi")
// console.log(res);
// let lastres  = s1.findLast(ele => ele.name === "laxmi")
// console.log(lastres);



// let b = [50,60,70];
// // console.log(a.concat(b));
// let res = a.slice(0,-1);
// console.log(res);
// // console.log(a.join(" * "));


// let a = [10,[2,[3,[4,[5,[6]]]]]];
// console.log(a[1][1][1][1][1]);
// console.log(a.flat(Infinity));
// console.log(a.flat(0));



// let student = [
//     { name: "Rahul", skills: ["JavaScript", "React"], address: { city: "BLR" } },
//     { name: "Priya", skills: ["Java", "Python"], address: { city: "BLR" } },
//     {name: "Arun", skills: ["HTML", "CSS"], address: { city: "BLR", pin: [754224] }}
// ]

// // let res = student.map(ele => ele.skills).flat(Infinity)
// let res = student.flatMap(ele => ele.address.pin)
// console.log(res);


// let arr = [1,2,3,4,5,6]
// arr.forEach(ele=>
//     console.log(ele*2)
// )
// let res = arr.map(ele => ele*2);
// console.log(res);
// let res = arr.filter((ele)=> ele >= 4);
// console.log(res);


// let arr = [1,2,3,4,5,6]
// let res = arr.reduce((acc,ele)=> acc * ele ,1)
// console.log(arr);
// console.log(res);


let a = [1,2,3,4,5];
let res = a.some(ele => ele>4);
console.log(res);
let res2 = a.every(ele => ele>4);
console.log(res2);