// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         * 
// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=5; j++){
//         (i<=j) ? row += "* " : row += "  "
//     }
//     console.log(row);
// }



//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=5; j++){
//         if(i+j == 6 || i+j >= 6){
//             row += " *"
//         }
//         else{
//             row += "  "
//         }
//     }
//     console.log(row);
// }

let n = 8;
for(let i=1; i<=2*n-1; i++){
    let row ="";
    for(let j=1; j <=n; j++){
        ((i<=n && i+j >= n+1)||(i>n && i-j <= n-1)) ? row += "* " : row += " "
    }
    console.log(row);
}