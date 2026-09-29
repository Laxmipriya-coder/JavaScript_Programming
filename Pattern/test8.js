// let n = 5;
// for(let i =1; i<=n; i++){
//     let char = 65 +n;
//     let row = ""
//     for(let j=1; j<=n; j++){
//         if(i+j)
//     }
// }
// let n = 4;
// for(let i=1; i<n*2-1; i++){
//     let row = "";
//     for(let j=1; j<n*2-1; j++){
//         i+j <= n+1 || i<j|| i+j<n+1 || j==n ? row += "* " : row += "  " 
//     }
//     console.log(row);
// }

let n=4;
for(let i=1;i<=n;i++){
    let row = ""
    for(let j=1;j<=n-i;j++){
        row += " ";
    }
    for(j=n-i+1;j<=n+i-1;j++){
       row += "* ";
    }
   console.log(row);
}