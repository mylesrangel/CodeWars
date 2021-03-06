// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


/* ATTEMPT 1 ------------------------------------------------------------------------------------------------------*/


// const opposite = {
//     n: 's',
//     s: 'n',
//     w: 'e',
//     e: 'w'
// }


// function isValidWalk(walk) {

//     //if walk.length is not equal to 10 we can return false
//     console.log(walk.length != 10)
//     if(walk.length != 10){
//         return false;
//     }

//     //loop through the array while there is a length
//     while(walk.length){

//         //check if there is an opposite array value
//         for(let i = 1; i<walk.length; i++){
//             //if so remove those two values and check the next one
//             console.log(opposite[walk[0]] == walk[i])
//             if(opposite[walk[0]] == walk[i]){
//                 walk.splice(i,1);
//                 walk.splice(0,1);
//                 break;
//             }
//             if(i+1 == walk.length && opposite[walk[0]] != walk[i]){
//                 return false;
//             }
//         }
        
//     }
//     return true;
// }




/* ATTEMPT 2 ------------------------------------------------------------------------------------------------------*/



const opposite = {
    n: 's',
    s: 'n',
    w: 'e',
    e: 'w'
}


function isValidWalk(walk) {



}


//console.log(isValidWalk([]),'false');
//console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'false');
console.log(isValidWalk(['w']), 'false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'false');




//BEST PRACTICE

// function isValidWalk(walk) {
//     var dx = 0
//     var dy = 0
//     var dt = walk.length
    
//     for (var i = 0; i < walk.length; i++) {
//       switch (walk[i]) {
//         case 'n': dy--; break
//         case 's': dy++; break
//         case 'w': dx--; break
//         case 'e': dx++; break
//       }
//     }
    
//     return dt === 10 && dx === 0 && dy === 0
//   }


//ANOTHER ONE ----------------------------------------------------------------------------------------------------------
// function isValidWalk(walk) {
//     function count(val) {
//       return walk.filter(function(a){return a==val;}).length;
//     }
//     return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }



//ANOTHER ONE ----------------------------------------------------------------------------------------------------------------------------


// function isValidWalk(walk) {
//     const north = walk.filter(item => { return item === "n" }).length;
//     const south = walk.filter(item => { return item === "s" }).length;
//     const east = walk.filter(item => { return item === "e" }).length;
//     const west = walk.filter(item => { return item === "w" }).length;
    
//     return walk.length === 10 && north === south && east === west;
//   }
