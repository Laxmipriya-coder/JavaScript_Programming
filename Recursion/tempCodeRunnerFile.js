    let sum = 0;
    for(let i=0; i<k; i++){
        sum += arr[i]
    }
    console.log(sum);
    for(let i=k; i<arr.length; i++){
        sum = sum + arr[i] - arr[i-k];
        console.log(sum);
    }
}
element([2,4,6,8,10],3);