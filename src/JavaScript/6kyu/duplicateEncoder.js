// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

/* ATTEMPT 1 ---------------------------------------------------------------------------------------------------------------- */

// function duplicateEncode(word){
//     console.log(word);
//     console.log(word[0].toLowerCase())

//     //variable for new string to return
//     let encodedString = '';

//     //iterate over the array
//     for(let i = 0; i<word.length; i++){
//         //iterate over the array starting at 0
//         for(let n = 0; n<word.length; n++){
//             //if value other than i found
//             if(word[i].toLowerCase() == word[n].toLowerCase() && i != n){
//                 //append ')'
//                 encodedString += ')';
//                 break;
//             }else if(n == word.length-1){
//                 //append '('
//                 encodedString += '(';
//             }
//         }
//     }
//     //return new string
//     return encodedString;

// }

/* ATTEMPT 2 --------------------------------------------------------------------------------------------*/

function duplicateEncode(word){

    return word.
                toLowerCase() //split every letter to lowerCase
                .split('') //turn into an array
                .map((a,i,w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')') //map over each element determine if the letter is in the array, if yes '(' else ')' where 'a' is each letter and 'w' is the array
                .join(''); //turn back into a string
}


//console.log(duplicateEncode("din"),"(((");
//console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
//console.log(duplicateEncode("(( @"),"))((");



//BEST PRACTICE

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
// }

//NEXT IN LINE 
// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }
