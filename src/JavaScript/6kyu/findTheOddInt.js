
function findOdd(arr) {
  
    //create an array to store the found values
    let foundOdds = [];
    //create an array to store the evens
    let foundEvens = [];
    //boolean to test if a value has been pushed to an array
    let pushedIt = false;
    //loop through the array and check to see if a value has a match
    for(let i = 0; i<arr.length; i++){
        //check to see if there is something in the odds array
        pushedIt = false;
        if(foundOdds){
            //check to see if the element is in the odds array
            for(let oddChar = 0; oddChar < foundOdds.length; oddChar++){
                if(foundOdds[i] == foundOdds[oddChar]){
                    foundOdds.splice(oddChar,1);
                    foundEvens.push(arr[i]);
                    pushedIt = true;
                }
            } 
        }  
        //check to see if the element is in the evens array
        if(foundevens && !pushedIt){
            //check to see if the element is in the even array
            for(let evenChar = 0; evenChar < foundevens.length; evenChar++){
                if(foundEvens[i] == foundevens[evenChar]){
                    foundEvens.splice(evenChar, 1);
                    foundOdds.push(arr[i]);
                    pushedIt = true;
                }
            }
        }
        //IF we didnt find a place, its a new value so its odd
        if(!pushedIt){
            foundEvens.push(arr[i]);
        }
    }
    //once the for loop is done we checked all the values and there should only be 1 value in foundOdds
    return foundOdds[0];
}



    console.log(([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
    console.log(([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
    console.log(([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
    console.log(([10], 10));
    console.log(([1,1,1,1,1,1,10,1,1,1,1], 10));
    console.log(([5,4,3,2,1,5,4,3,2,10,10], 1));