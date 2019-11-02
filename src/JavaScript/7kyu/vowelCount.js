// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {

    var vowelsCount = 0;
    //object of vowels to compare to
    const vowels = {
       a: true,
       e: true,
       i: true,
       o: true,
       u: true
    }
    
    for(let i = 0; i<str.length; i++){
        if(vowels[str[i]]){
            vowelsCount++;
        }
    }
    
    return vowelsCount;
}


  console.log(getCount("wfajeoouv"));
