// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


var countBits = function(n) {

    if(n === 0) return 0;
    let nArr = n.toString(2).split('');    
    let totalOnes = 0;
    
    nArr.forEach(number =>{
        if(number === '1') totalOnes++;
    });

    return totalOnes;
};

//console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);


//BEST PRACTICE

// countBits = n => n.toString(2).split('0').join('').length;


//ANOTHER ONE

// function countBits(n) {
//     for(c=0;n;n>>=1)c+=n&1
//     return c;
// }