


// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// function nextBigger(n){

//     if((n < 10) || (n.toString().split('').sort((a, b) => b - a).map(Number).join('') == n)){
//         return -1;
//     }

//     let biggerValue;
//     let swapValue;
//     //default value, no number is bigger than 9
//     let smallestValue = 10;
//     let index;
//     //tracks if a swaped happened
//     let swap = false;

//     //split the number into an array
//     biggerValue = n.toString().split('');

//     //loop through the array starting at the end of the array
//     for(let i = biggerValue.length-1; i >= 0; i--){
//         //if the array[array.length-1] > array[array.length-2]
//         if(biggerValue[i] > biggerValue[i-1]){
            
//             //we found the place for the split

//             //split the array into biggerValue and rightArray
//             rightArray = biggerValue.splice(i-1);

//             //need to find the smallest number in rightArray that is bigger that rightArray[0]
//             ///need to rework this function
//             for(let i = 2; i<rightArray.length; i++){
//                 if(rightArray[i] < rightArray[1] && rightArray[i] > rightArray[0] && rightArray[i] < smallestValue){
//                     smallestValue = rightArray[i];
//                     index = i;
//                     swap = true;
//                 }
//             }
//             if(!swap){
//                 swapValue = rightArray[1];
//                 rightArray[1] = rightArray[0];
//                 rightArray[0] = swapValue;
//             }else{
//                 swapValue = rightArray[0];
//                 rightArray[0] = smallestValue;
//                 rightArray[index] = swapValue;
//             }
            
//             biggerValue.push(rightArray.shift());

//             //the rightArray needs to be sorted lowest to highest value
//             rightArray.sort((a,b) => a-b);
//             //return the leftArray merged with the rightArray
//             biggerValue = [...biggerValue, ...rightArray];

//             return parseInt(biggerValue.join(''));
//         }
//     }
// }


//console.log(nextBigger(12),21)
// console.log(nextBigger(513),531)
// console.log(nextBigger(2017),2071)
// console.log(nextBigger(414),441)
// console.log(nextBigger(144),414)
//console.log(nextBigger(7573), 7735)
//console.log(nextBigger(675621), 676125)
//console.log(nextBigger(36988882), 38268889)
console.log(nextBigger(5583890871), 5583891078)



//BEST PRACTICE


// function nextBigger(n){
//     console.log(n);
//     var chars = n.toString().split('');
//     var i = chars.length-1;
//     while(i > 0) {
//       if (chars[i]>chars[i-1]) break;
//       i--;
//     }
//     if (i == 0) return -1;
//     var suf = chars.splice(i).sort();
//     var t = chars[chars.length-1];
//     for (i = 0; i < suf.length; ++i) {
//       if (suf[i] > t) break;
//     }
//     chars[chars.length-1] = suf[i]
//     suf[i] = t;
//     var res = chars.concat(suf);
//     var num = parseInt(res.join(''));
//     console.log("->" +num);
//     return num;
// }






//this way is better

function nextBigger(n){

  const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

  let arr = sortedDigits(n);

  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}



