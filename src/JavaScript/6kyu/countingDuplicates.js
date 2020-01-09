
function duplicateCount(text){
    console.log(typeof(text));
    console.log(text);

    if(!text){
        return 0;
    }

    let foundValues = {}
    let count = 0;

    text = text.toLowerCase();

    //loop through each letter in the array and add to our object.
        for(let i = 0; i<text.length; i++){
            //if the letter isn't in our object, add it
            if(!foundValues[text[i]]){
                foundValues[text[i]] = 1;
            }else if(foundValues[text[i]] == 1){
                foundValues[text[i]]++;
                count++;
            }else{
                foundValues[text[i]]++;
            }
        }
    return count;
}

    


//console.log(duplicateCount(""), 0);
//console.log(duplicateCount("abcde"), 0);
//console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")



//BEST PRACTICE

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }


//ANOTHER ONE

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }