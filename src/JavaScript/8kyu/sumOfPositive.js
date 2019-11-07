

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  return arr.reduce((a,b) => b>0?a+b:a+0,0);
}


console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]))


//BEST PRACTICE


//  function positiveSum(arr) {
//   var total = 0;    
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }