// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


function iqTest(numbers){
    
    let oddValueFound = 0;
    let oddValueIndex = 0;
    let evenValueFound = 0;
    let evenValueIndex = 0;


    //place a space at the beginning of the string
    numbers = numbers.split(' ');

    //loop through the array to looking for odd / even values
    for(var i = 0; i<numbers.length; i++){

        //if the number is even and we already found an odd
        if(numbers[i] % 2 == 0){
            evenValueFound++;
            evenValueIndex = i+1;
        }else{
            oddValueFound++;
            oddValueIndex = i+1;
        }
    }
    //if nothing was found return the first value (that was the answer)
    if(oddValueFound == 1){
        return oddValueIndex;
    }else{
        return evenValueIndex;
    }
}


//console.log(iqTest("2 4 7 8 10"),3);
//console.log(iqTest("1 2 2"), 1);




//BEST PRACTICE

// function iqTest(numbers){
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
//     var odd = numbers.filter(function(el){ return el % 2 === 1});
//     var even = numbers.filter(function(el){ return el % 2 === 0});
    
//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
//   }


//ANOTHER ONE
// function iqTest(numbers){
//     numbers = numbers.split(' ')
    
//     var evens = []
//     var odds = []
    
//     for (var i = 0; i < numbers.length; i++) {
//       if (numbers[i] & 1) {
//         odds.push(i + 1)
//       } else {
//         evens.push(i + 1)
//       }
//     }
    
//     return evens.length === 1 ? evens[0] : odds[0]
//   }