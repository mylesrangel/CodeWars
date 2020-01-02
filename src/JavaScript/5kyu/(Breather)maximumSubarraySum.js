// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function sumOfSubstring(arr,index){
    for(let i = index; i<arr.length; i++){
        if(arr[i] >= 0 && (arr[i] + arr[i+1] > 0)){
            return arr[i];
        }
    }
}

var maxSequence = function(arr){

    greatestSum = 0;
    currentSum = 0;
    firstPositive = -1;
    secondPositive = -1;
    firstNumberIndex = 0;
    secondNumberIndex = 0;

    console.log(arr);

    for(let i = 0; i< arr.length; i++){
        console.log(i);

        //find the next index of a positive number
        if(arr[i] >= 0 && firstPositive === -1){
            console.log(i);
            firstNumberIndex = i;
            console.log(firstNumberIndex);
            firstPositive = arr[i];
        }
        // Find the second positive number or the end of the array
        else if(arr[i] >= 0 || i == arr.length) {
            console.log(i);
            //move the index while the next number is a positive || arr[i+1] > arr[i+2]
            console.log(arr[i+1]);
            while(arr[i+1] > 0){
                let secondPositive = i+1;
                let negativeNumbers = 0;
                let count = 1;
                //if the current positive second number is greater than all the negative numbers to the next positive
                while(arr[secondPositive] > negativeNumbers){
                    if(arr[secondPositive + count] < 0){
                        negativeNumbers += Math.abs(arr[secondPositive + count]);
                        count++;
                    }else{
                        i = i + count;
                        break;
                    }
                }
                i++;
            }
            console.log(arr[i]);
            console.log(arr.indexOf(arr[i]));
            console.log(firstNumberIndex);
            ///TODO: For loop is not working correctly (i is the issue?)
            //loop through from the next positive and the next next positive
            for(let n = firstNumberIndex; n <= i; n++){
                console.log(arr[n]);
                currentSum += arr[n];
                console.log(currentSum);
            }
            //reset variables that matter
            firstPositive = -1;
            i = firstNumberIndex;
            console.log(currentSum);
        }
        
        if(greatestSum < currentSum){
            console.log(currentSum);
            console.log(greatestSum);
            greatestSum = currentSum;
        }

        currentSum = 0;
    }
    return greatestSum;
};


//console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([-40, -14, 11, -8, -6, 3, 7, 27, 11, 5, 39, 17, 2, -35 ]), 111);
console.log(maxSequence([ -23,-39,-18,45,17,-33,-34,37,-4,41,-48,10,25,22,-26,-34,45,3,-3,-25,-23,-29,31,-13,39,4,-13,-4,38,2,-50,-28,17,-34,26,29,28,-48,47,16,-9,-14,30,-43,34,-39,22,39,-18,29,31,-23,49,42,-4,-19]), 228)