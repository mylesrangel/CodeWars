




// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10.

// their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with three values: [1,2,3]

// 1 - the total number of possible numbers

// 2 - the minimum number

// 3 - the maximum number

// The example given above should be:

// findAll(10, 3) => [8, "118", "334"]
// If we have only one possible number as a solution, it should output a result like the one below:

// findAll(27, 3) => [1, "999", "999"]
// If there are no possible numbers, the function should output the empty array.

// findAll(84, 4) => []
// The number of solutions climbs up when the number of digits increases.

// findAll(35, 6) => [123, '116999', '566666']
// Features of the random tests:

// Number of tests: 112
// Sum of digits value between 20 and 65
// Amount of digits between 2 and 17


function findAll(n, k) {
    // your code here
    console.log(n);
    console.log(k);

    //create an array for total count of possibilities
    let totalCount = 0;
    //create variable for smallest value
    let smallestValue = 0;
    //create variable for largest value
    let largestValue = 0;
    //create variable to stop searching
    let keepSearching = true;

    //create array to hold each digit
    let numbers = [];
    
    //set the last digit of array to n - k + 1;
    numbers[k-1] = n-k + 1;
    
    console.log(numbers)

    //set all the other digits to 1 this should also be the smallest
    for(let n = 0; n<numbers.length - 1; n++){
        console.log(n)
        numbers[n] = 1;
    }

    smallestValue = numbers;

    console.log(smallestValue);
    console.log(numbers[k-1]) 
    console.log(numbers);

    console.log(numbers.length);

    console.log(numbers[numbers.length-1]);

    //  while(numbers[0] <= (numbers[1])){
        
        //create a variable to store the sumOfArray
        let sumOfArray = 0;
        let index = 0;

        //check if the array is equal to k
    //  for(let i = 0; i<n-k+1; i++){
    //      sumOfArray += numbers[i];
    //  }

    //  if the sumOfArray is equal to k
            //add 1 to totalValues


        //while number values are equal to 1
            //move to numbers[++]


        
        //if index + 1 == NaN we are at the end of the array.
            //numbers[index]--
            //numbers[index-1]++
        //else if index + 1 != NaN
        
        
        





    // }
    return [totalCount, smallestValue, largestValue];
}


console.log(findAll(10, 3), [8, '118', '334']);
// console.log(findAll(27, 3), [1, '999', '999']);
// console.log(findAll(84, 4), []);
// console.log(findAll(35, 6), [123, '116999', '566666']) 





