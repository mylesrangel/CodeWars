
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){

    //create an array to store the sorted words
    let sortedWords = [];


    if(words.length == 0){
        return "";
    }

    console.log(typeof(words));

    //create a variable to store the split string
    let splitWords = words.split(" ");
    console.log(splitWords);

    //take that split string and sort it by its number
     console.log(splitWords);

     for(let i = 0; i<splitWords.length; i++){
        let number = splitWords[i].match(/\d+/);
        sortedWords[number] = splitWords[i]
     }
    
     return sortedWords.join(" ").trim();
}


console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")



//BEST PRACTICE

// function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }    




