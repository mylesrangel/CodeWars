

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {

    if(input == null){
        return [];
    }

    maxPosNum = 0;
    negSum = 0;
    for(let i = 0; i<input.length; i++){
        if(input[i] > 0){
            maxPosNum++;
        }else if(input[i] < 0){
            negSum = negSum + input[i];
        }
        console.log(negSum);
    }
    if(maxPosNum == 0 && negSum == 0){
        return input;
    }
    return([maxPosNum,negSum]);  
}


//console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([]));



//BEST PRACTICE

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }


