

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// #Examples:

// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.


function nbDig(n, d) {

    count = 0;
    digits = [];

    for(let i = 0; i<n+1; i++){
        let squared = i * i;

        //determine if squared value is bigger than a single digit
        if(squared > 9){
            //convert the number to a string
            digit = squared.toString();
            //loop through the string value and push them to array
            for(let n = 0; n<digit.length; n++){
                digits.push(digit[n]);
            }
        }else{
            //convert the value to string and push to array
            squared.toString();
            digits.push(squared);     
        }

    //check how many 'd' digits we have in the array
    for(let i = 0; i<digits.length; i++){
        if(digits[i] == d){
            count++;
        }
    }
    return count;
}

console.log(nbDig(10,1));

//console.log(nbDig(5750, 0));
//console.log(nbDig(11011, 2));

// BEST PRACTICE

// function nbDig(n, d) {
//     var res=0;
//         for (var g=0;g<=n;g++){
//           var square=(g*g+"").split("");
//           square.forEach((s)=>s==d?res++:null)
//         }return res;
// }
