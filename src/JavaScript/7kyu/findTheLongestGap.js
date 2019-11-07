
// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that, given a positive num, returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.


function gap(num) {
    //convert num to binary
    let binaryNum = num.toString(2);
    //create 'maxCount' variable to hold max '0' found
    let maxCount = 0;
    //create 'currentCount' variable to hold current '0' count
    let currentCount = 0;

    //loop through binarynum to find all 0
    for(let i = 0; i<binaryNum.length; i++){
        if(binaryNum[i] == 1){
            if(maxCount < currentCount){
                maxCount = currentCount;
            }
            currentCount = 0;
        }else{
            currentCount++;
        }
    }
    return maxCount;
}



//console.log(gap(9));
//console.log(gap(529));
console.log(gap(20));




//Best Practice (5 votes)

// const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;

