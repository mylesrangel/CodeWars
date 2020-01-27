// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8


function rowSumOddNumbers(n) {
    // TODO
    console.log(n);
    console.log(typeof(n))
    let total = 0;
    let startValue = 1;

    for(let i = 1; i <= n; i++){
        for(let j = 0; j < i; j++){
            if(i === n){
                total += startValue;
                startValue += 2;
            }else{
                startValue += 2;
            }
        }
    }
    return total;
}


//console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);


//BEST PRACTICE
// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }


//ANOTHER ONE

// function rowSumOddNumbers(n) {
//     return n*n*n
// }
