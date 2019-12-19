// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

const alphabetCode = {
    26: 'a',
    25: 'b' ,
    24: 'c' ,
    23: 'd',
    22: 'e' ,
    21: 'f' ,
    20: 'g' ,
    19: 'h' ,
    18: 'i' ,
    17: 'j' ,
    16: 'k' ,
    15: 'l' ,
    14: 'm' ,
    13: 'n' ,
    12: 'o' ,
    11: 'p' ,
    10: 'q' ,
    9: 'r' ,
    8: 's' ,
    7: 't' ,
    6: 'u' ,
    5: 'v' ,
    4: 'w' ,
    3: 'x' ,
    2: 'y' ,
    1: 'z' ,
    27: '!' ,
    28: '?' ,
    29: ' ' 
};



function switcher(x){

    let codedWord = "";

    for(let i = 0; i<x.length; i++){
        codedWord += alphabetCode[x[i]];
    }
    return codedWord;


}


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
// console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
// console.log(switcher(['4', '24']), 'wc'); 


//BEST PRACTICE

// const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")


//ANOTHER ONE

// function switcher(x)
// {
//   return x.map(a => 
//     {
//       if(a == 27) return "!";
//       if(a == 28) return "?";
//       if(a == 29) return " ";
//       return String.fromCharCode(97 + 26 - parseInt(a));
      
//     }).join('');
// }