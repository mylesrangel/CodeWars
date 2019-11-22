

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

//  array = [[1, 2, 3, 4, 5], 
//           [6, 7, 8, 9, 10], 
//           [11, 12, 13, 14, 15], 
//           [16, 17, 18, 19, 20],
//           [21, 22, 23, 24, 25]]
//     snail(array) #+> [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]




// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


// snail = function(array) {
//     // enjoy

//     console.log(array)

//     if(array[0] == ''){
//         return [];
//     }

//     let snailArray = [];


//     // console.log(snailArray = snailArray.concat(shiftRight(array,array[0].length)));
//     // console.log(snailArray)

//     console.log(typeof(array))
//     console.log(typeof(snailArray));
//     console.log(array)
//     console.log(array[0].length)
//     console.log(array[3])

//     while(array.length > 0){
//         //add all the elements in array[0] into snailArray
//         if(array.length > 0){
//             console.log(array[0].length)
//             //console.log(typeof(shiftRight(array,array[0].length)))
//             snailArray = snailArray.concat(shiftRight(array, array[0].length)); //1 , 2 ,3
//             checkArray(array);
//             console.log(array)
//             console.log(snailArray)
//             console.log(array.length)
//         }
//         if(array.length > 0){

//             snailArray = snailArray.concat(shiftDown(array, array.length)); //3, 6, 9
//             checkArray(array);
//             console.log(array);
//             console.log(snailArray)
//             console.log(array.length)
//         }
//         if(array.length > 0){
//             snailArray = snailArray.concat(shiftLeft(array, array[0].length)); //8,7
//             checkArray(array);
//             console.log(array)
//             console.log(snailArray)
//             console.log(array.length)
//         }
//         if(array.length > 0){
//             snailArray = snailArray.concat(shiftUp(array, array.length)); //4
//             checkArray(array);
//             console.log(array);
//             console.log(snailArray)
//             console.log(array.length)
//         }

//     }
//     console.log(snailArray);
//     if(array[0] != undefined){
//         snailArray.push(array[0]);
//     }
//     return snailArray = [].concat.apply([], snailArray);
// }


// function shiftRight(array, length){
//     let returnValue = [];

//     for(let i = 0; i<length; i++){
        
//         console.log(array[0])
//         returnValue.push(array[0].splice(0,1));
//         //returnValue.push(array[0].shift());
//     }
//     console.log(returnValue)
//     return returnValue;
// }

// function shiftDown(array, length){
//     let returnValue = [];
//     let removed;
//     console.log(removed)

//     console.log(length)

//     for(let i = 0; i<length; i++){
//         console.log(array[1]);
//         console.log(array[i])
//         returnValue.push(array[i].splice(length ,1));
//     }

//     console.log(returnValue)
//     return returnValue;
// }
// function shiftLeft(array, length){
//     let returnValue = [];
//     for(let i = 0; i<length; i++){
//         console.log(array[length-1] )
//         returnValue.push(array[length-1].pop());
//     }

//     console.log(returnValue);
//     return returnValue;
// }
// function shiftUp(array, length){
//     let returnValue = [];
//     console.log(length)
//     console.log(array)
//     ///CHECK: changed for loop to this from for(let i = 0; i<length....)
//     for(let i = 1; i <= length; i++){
//         ///CHECK: changed splice(length-1,1) to this
//         returnValue.push(array[length-i].splice(0,1));
//     }
//     console.log(returnValue);
//     return returnValue;
// }

// //check array check for any empty elements in the array and splices them out
// function checkArray(array){
//     //loop through the array to check if its empty
//     if(array.length){
//         console.log(array);
//         for(let i = 0; i<array.length;i++){
//             if(array[i] == ""){
//                 array.splice(i,1);
//             }  
//         }
//         console.log(array)
//     }
// }


//console.log(snail([[]]), []);
//console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
//console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);









//BEST PRACTICE

// snail = function(array) {
//     var result;
//     while (array.length) {
//       // Steal the first row.
//       result = (result ? result.concat(array.shift()) : array.shift());
//       // Steal the right items.
//       for (var i = 0; i < array.length; i++)
//         result.push(array[i].pop());
//       // Steal the bottom row.
//       result = result.concat((array.pop() || []).reverse());
//       // Steal the left items.
//       for (var i = array.length - 1; i >= 0; i--)
//         result.push(array[i].shift());
//     }
//     return result;
//   }




//OPTION TWO 



function snail(array) {
    var vector = [];
    console.log(array)
    while (array.length) {
      
      //gets the first row of the array
      vector.push(...array.shift());
      //iterates over each row and pops (the last value)
      array.map(row => vector.push(row.pop()));
      //reverses the order of the index and loops through and reverses the values (i.e. [[4,5] , [7,8]] ) becomes [[8,7] , [5,4]]
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }