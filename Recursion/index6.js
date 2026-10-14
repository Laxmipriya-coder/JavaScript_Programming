// MAP METHODS
// 1.set()
// 2.get()
// 3.delete()
// 4.has();
// 5.size()
// 6.clear()
let m1 = new Map();
m1.set(1,"Laxmi");
m1.set(2,"Priya");
console.log(m1.get(1));

console.log(m1.get(2));
m1.delete(1);
console.log(m1.size);
console.log(m1.has(2));
console.log(m1.has(1));
m1.clear();
console.log(m1);