
let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.




function wordsToMarks(string){
    //create string value
    let stringValue = 0;
    //create array of alphabet
    let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    console.log(string[0]);
    console.log(alphabet.indexOf(string[0]));

    //loop through string
    for(let i = 0; i<string.length; i++){
        //find first letter's index using alphabet
        let letterValue = alphabet.indexOf(string[i]);
        stringValue += letterValue;
    }
    return stringValue;
}



console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);





// BEST PRACTICE
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)


