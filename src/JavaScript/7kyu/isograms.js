// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case




function isIsogram(str){


        for(let i = 0; i<str.length; i++){

            let regex = new RegExp('(\n.*)*' + str[i].toLowerCase(), 'g');

            if(str.toLowerCase().match(regex).length >= 2){
                return false;
            }
        }
    
    return true;
}


console.log(isIsogram("Dermatoglyphics"), true );
// console.log(isIsogram("isogram"), true );
// console.log(isIsogram("aba"), false, "same chars may not be adjacent" );
// console.log(isIsogram("moOse"), false, "same chars may not be same case" );
// console.log(isIsogram("isIsogram"), false );
// console.log(isIsogram(""), true, "an empty string is a valid isogram" );



//BEST PRACTICE
// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str)
//   }
//   //z.


//ANOTHER ONE 
// function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
// }