// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer




function squareDigits(num){
    return parseInt(num.toString().split('').map(x=>x*x).join(''));   
}



console.log(squareDigits(9119), 811181);


//BEST PRACTICE


// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));    
//   }