

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2



function digital_root(n) {

    console.log(typeof(n))

    let numbers = n.toString().split('').map(Number);

    console.log(n)
    console.log(numbers.length);

    console.log(numbers[0])

    if(numbers.length > 1){

        let sum = 0;

        for(let i = 0; i<numbers.length; i++){
            sum += numbers[i];
        }
        console.log(typeof(sum));
        return digital_root(sum);
        
    }else{
        console.log(numbers[0])
        return numbers[0];
    }
}


console.log(digital_root(16), 7 )
console.log( digital_root(456), 6 )


//BEST PRACTICE

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }







