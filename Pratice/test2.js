

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// let n =5; 
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=i; j<=n; j++){
//         row += "* "
//     }
//     console.log(row);
// }
let n=5;
for(let i=1; i<=n; i++){
    let row = ""
    for(let j=1; j<=n-1; j++){
        if(i==j || i>= j){
            row += "* "
        }
        else{
            row += "  "
        }
    }
    console.log(row);
}