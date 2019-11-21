// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    //code here
    console.log(typeof(str));
    console.log(str);
    console.log(str[0])
    console.log(str.length)
    if(str.length == 0){
        return true;
      }
    //create variables to store 'o's' and 'x's'
    let oVariable = 0;
    let xVariable = 0;
    //loop through the array and 'count' the number of 'o' and 'x' found
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'x' || str[i] == 'X'){
            xVariable++;
        }else if(str[i] == 'o' || str[i] == 'O'){
            oVariable++;
        }
    }
    //if two variables moded together = 0 return true
    if(((oVariable + xVariable) % 2 == 0) && (xVariable > 0 && oVariable > 0)){
        return true;
    }else{
        return false;
    }
}



console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);



//BEST PRACTICE

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }






