
function accum(s) {
    
    //Create new variable to store result
    let mumbled = '';
    //get the first value in string
    for(let i = 0; i<s.length; i++){
        for(let n = 0; n<i+1; n++){
            if(n == 0){
                mumbled += s[i].toUpperCase();
            }
            mumbled += s[i].toLowerCase();
        }
        if(i != s.length -1 ){
            mumbled += "-";
        }
    }
  return mumbled;
}

console.log((accum("SLFKWUTSLJHTY")));
console.log((accum("NyffsGeyylB")));
console.log((accum("MjtkuBovqrU")));
console.log((accum("EvidjUnokmM")));
console.log((accum("HbideVbxncC")));