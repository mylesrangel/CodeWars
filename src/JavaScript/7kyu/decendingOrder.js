
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221




function descendingOrder(n){

    return returnValue = parseInt(n.toString().split('').sort().reverse().map(Number).join(''));
}



console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)



//BEST PRACTICE

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }

