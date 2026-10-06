let arr = [20,30,40,20,10,30,50,60];
let copy = [];
let uni = []
let obj ={};
for(let i=0; i<arr.length; i++){
    let digit = arr[i];
    obj[digit] = (obj[digit] || 0) + 1
}
for(let key in obj){
    if(obj[key] > 1){
        copy[copy.length] = key;
    }
    else{
        uni[uni.length] = key
    }
}
console.log(copy);
console.log(uni);