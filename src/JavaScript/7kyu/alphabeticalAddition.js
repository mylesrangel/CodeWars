


// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
// Confused? Roll your mouse/tap over here


//NOTE: letters[0][i] is equal to letters[i] in codewars.com I added an array for the element for fun. 


function addLetters(...letters){

    //if ...letters is empty return 'z'
    console.log(letters[0][0].length);
    if(letters[0].length === undefined){
        return 'z';
    }

    //fill the array with the alphabet and corresponding values
    let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    console.log(letters[0]);
    console.log(alphabet.indexOf(letters[0][1]));
    console.log(alphabet.indexOf(letters[0][0]));

    //create a sum variable to hold ...letters value
    let sum = 0;

    //loop through letters to determine letters add up
    for(let i = 0; i<letters[0].length; i++){
        //sum cant be bigger than 26.
        console.log(sum)
        if(sum + alphabet.indexOf(letters[0][i]) > 26){
            //if sum is greater than 26 it needs to loop back around to 1
            console.log(sum)
            sum += alphabet.indexOf(letters[0][i]) - 26;
            console.log(sum)
        }else{
            sum += alphabet.indexOf(letters[0][i]);
        }
    }
    console.log(sum);
    console.log(alphabet[sum]);

    return alphabet[sum];
}




//console.log(addLetters(['a', 'b', 'c']),'f');
//console.log(addLetters(['z','a']))
//console.log(addLetters[])


//BEST PRACTICE (20 votes)

// function addLetters(...letters) {
//     return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
// }


