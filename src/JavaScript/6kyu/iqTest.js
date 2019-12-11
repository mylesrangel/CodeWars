// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


function iqTest(numbers){
    
    let oddValueFound = false;
    let evenValueFound = false;

    //place a space at the beginning of the string
    console.log(typeof(numbers))
    console.log(numbers);
    console.log(numbers = numbers.split(' ').join(""));
    console.log(typeof(numbers));
    console.log(numbers);

    numbers = " "+numbers;

    //find what we are looking for (even or odd)
    if(numbers[1] % 2 == 0){
        evenValueFound = true;
    }else{
        oddValueFound = true;
    }

    console.log(numbers[2])
    console.log(numbers[5] % 2)

    //loop through the array to looking for odd / even values
    for(var i = 2; i<numbers.length; i++){

        //if the number is even and we already found an odd
        if(numbers[i] % 2 == 0 && oddValueFound){
            return i;
        }
        //if the number is odd and we already found an even;
        else if(numbers[i] % 2 == 1 && evenValueFound){
            return i;
        }
    }
    //if nothing was found return the first value (that was the answer)
    return 1;
}


console.log(iqTest("2 4 7 8 10"),3);
 console.log(iqTest("1 2 2"), 1);


