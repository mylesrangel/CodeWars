
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



function high(x){

    let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //largest word variable
    let indexOfWord = 0;
    let largestWord = 0;
    let currentWord = 0;

    wordArray = x.split(' '); //n

    //loop through each word
    for(let i = 0; i<wordArray.length; i++){
        currentWord = 0;
        //loop through each letter in the wordArray
        for(let n = 0; n<wordArray[i].length; n++){
            console.log(wordArray[i][n]);
            currentWord += alphabet.indexOf(wordArray[i][n]);
            
        }
        if(largestWord < currentWord ){
            largestWord = currentWord;
            indexOfWord = i;

        }

        
    }
    return wordArray[indexOfWord];
}



//console.log(high('man i need a taxi up to ubud'), 'taxi');
//console.log(high('what time are we climbing up the volcano'), 'volcano');
//console.log(high('take me to semynak'), 'semynak');


//BEST PRACTICE

// function high(x){
//     /transform the input string into array & define a string of alphabetical latin characters
//     var arr = x.split(' ');
//     var str = 'abcdefghijklmnopqrstuvwxyz';
//     /Iterate through the array with input words to find the one with the greatest sum
//     var newArr = arr.map(function(word){
//       var sum = 0;
//       for (var i = 0; i < word.length; i++) {
//         sum += str.indexOf(word[i]);
//       }
//       return sum;
//     });
//     /Return the word with the greatest sum
//     return arr[newArr.indexOf(Math.max(...newArr))];
//   }





