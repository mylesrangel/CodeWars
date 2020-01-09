// You are given three piles of casino chips: white, green and black chips:

// the first pile contains only white chips
// the second pile contains only green chips
// the third pile contains only black chips
// Each day you take exactly two chips of different colors and head to the casino. You can chose any color, but you are not allowed to take two chips of the same color in a day.

// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

// solve([1,1,1]) = 1, because after you pick on day one, there will be only one chip left
// solve([1,2,1] = 2, you can pick twice; you pick two chips on day one then on day two
// solve([4,1,1]) = 2
// More examples in the test cases. Good luck!

// Brute force is not the way to go here. Look for a simplifying mathematical approach.

function solve(arr){

    let numOfDays = 0;

    arr.sort((a,b) => b-a);


    while(arr[0] > 0 && arr[1] > 0){

        numOfDays++;
        arr[0]--;
        arr[1]--;

       if(arr[0] < arr[2] || arr[1] < arr[2]){
            arr.sort((a,b) => b-a);
        }
    }
    return numOfDays;
}



// console.log(solve([1,1,1]), 1);
console.log(solve([1,2,1]), 2);
console.log(solve([4,1,1]), 2);
console.log(solve([8,2,8]), 9);
console.log(solve([8,1,4]), 5);
console.log(solve([7,4,10]), 10); 
console.log(solve([12,12,12]), 18); 
console.log(solve([1,23,2]), 3);








//BEST PRACTICE

// solve=([a,b,c])=>Math.min(a+b,a+c,b+c,(a+b+c)/2|0)


//ANOTHER ONE

// function solve(arr){
//     let count = 0;
  
//     arr.sort((a, b) => a - b);
    
//     while (arr[0] > 0) {
//       if (arr[1] <= arr[2]) {
//         arr[0]--;
//         arr[2]--;
//         count++;
//       } else {
//         arr[0]--;
//         arr[1]--;
//         count++;
//       }
//     }
    
//     if (arr[1] <= arr[2]) {
//       count += arr[1];
//     } else {
//       count += arr[2];
//     }
    
//     return count;
//   }