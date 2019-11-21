


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




function findShort(s){

    s = s.split(' ');

    let smallest = s[0].length;

    for(let i = 1; i<s.length; i++){
        if(s[i].length < smallest){
            smallest = s[i].length;
        }
    }
    return smallest
}




console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 




//BEST PRACTICE

// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }


