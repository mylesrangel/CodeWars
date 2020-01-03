// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption



function longestConsec(strarr, k){

    if((strarr.length === 0) || (k > strarr.length) || (k < 0)) return ""; 

    console.log((strarr.reduce((a,b) => a.length > b.length ? a : b )));

    if(k === 1) return(strarr.reduce((a,b) => a.length > b.length ? a : b ));
    
    let tempString = 0;
    let tempLength = 0;
    let longestValue = "";

    console.log(strarr.slice(0,2));

    for(let i = 0; i<strarr.length; i++){
        tempString = strarr.slice(i,i+k);
        tempLength = "";
        for(let n = 0; n<tempString.length; n++){
            tempLength += tempString[n];
            console.log(tempLength)
        }

        console.log(tempLength.length)
        console.log(longestValue)
        if(longestValue.length < tempLength.length){

            longestValue = tempLength;
        }

        console.log(tempString);
    }
    console.log(longestValue)

    return longestValue;
}




// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3), "");
//console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");





//BEST PRACTICE

// function longestConsec(strarr, k) {
//     var longest = "";
//     for(var i=0;k>0 && i<=strarr.length-k;i++){
//       var tempArray = strarr.slice(i,i+k);
//       var tempStr = tempArray.join("");
//       if(tempStr.length > longest.length){
//         longest = tempStr;
//       }
//     }
//     return longest;
// }


//ANOTHER ONE

// function longestConsec(strarr, k) {
//     if( strarr.length==0 || k> strarr.length || k <1 ) return "";
//     let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
//         i = lens.indexOf( Math.max(...lens) );
//     return strarr.slice(i,i+k).join('')
//   }
