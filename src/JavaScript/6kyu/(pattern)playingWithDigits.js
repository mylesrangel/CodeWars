// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.



function digPow(n, p){
    // ...

    console.log(typeof(n));
    console.log(typeof(p))
    console.log(n);
    console.log(p)

    //split n into a string to get each digit
    let nDigits = n.toString();
    let totalSum = 0
    let digitSum = 0;
    //loop through each digit and multiply it by its squared/cubed...value and add them all together
    for(let i = 0; i<nDigits.length; i++){
        console.log(nDigits[i])

        //take the first digit
        digitSum = nDigits[i];

        //loop through how many times we need to multiply itself by.
        for(let n = 0; n<i; n++){

            digitSum *= digitSum
        }

        console.log(digitSum)
        totalSum += Number(digitSum);
        console.log(totalSum)

    }

    if(totalSum == n * 1){
        return 1;
    }else{
        return -1
    }

}


console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)






