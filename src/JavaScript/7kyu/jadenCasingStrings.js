// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org




var toJadenCase = function (str) {

    console.log("test");

    splitStr = str.split(" ");

    console.log(splitStr[0].toLowerCase() + splitStr.slice(1));

    splitStr.map((word , i) => {
        splitStr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    splitStr = splitStr.join(' ');

    console.log(splitStr);




    // console.log(typeof(str));

    // console.log(str.indexOf(' '));

    // let currentIndex = str.indexOf(' ');
    // let oldIndex = 0;
    // let newString = ''

    // while(currentIndex != -1){
    //     console.log(currentIndex);
    //     // str[currentIndex + 1].toUpperCase();
    //     str.substring(currentIndex+1, currentIndex+2).toUpperCase();
    //     console.log(str[currentIndex + 1]);
    //     oldIndex = currentIndex;
    //     currentIndex = str.indexOf(' ', currentIndex + 1);
    // }


    
    return splitStr;
    
};



console.log(toJadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real");




//BEST PRACTICE

//MINE!!!