// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


//ATTEMPT 1 -------------------------------------------------------------------------------------------------------------------


// function spinWords(words){

//     let reversedWords = '';

//     words = words.split(' ');

//     console.log(words)

//     console.log(words[0])
//     console.log(words[0].length)

//     //iterate through: if the word has 5 or more letters reverse the word
//     for(let i = 0; i<words.length; i++){
//         if(words[i].length >= 5){
//             reversedWords += " " + words[i].split('').reverse().join('');
//         }else{
//             reversedWords += " " + words[i];
//         }
//     }


//     return reversedWords.trim();
// }



//ATTEMPT 2 ---------------------------------------------------------

function spinWords(words){

    let reversedWords = '';

    words.split(' ').map(word => {
        word.length >= 5 ? reversedWords += " " + word.split('').reverse().join('') : reversedWords += " " + word
    })

    return reversedWords.trim();
}


//console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//console.log(spinWords("This is a test"), "This is a test");
// console.log(spinWords("This is another test"), "This is rehtona test");
// console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");





//BEST PRACTICE---------------------------


// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }


//ANOTHER ONE _---------------------------------------------------------------------

// function spinWords(string){
//     return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }