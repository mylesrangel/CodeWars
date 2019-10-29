


function findOdd(arr) {
  
    //create an array to store the found values
    let foundOdds = [];

    

    //loop through the array and check to see if a value has a match
    for(let i = 0; i<arr.length; i++){
        if(!foundOdds){
            foundOdds.push(arr[0]);
        }
        else{
            
            let foundMatch = false;

            //check to see if the element is in the odds array
            for(let oddChar = 0; oddChar < foundOdds.length; oddChar++){
                if(arr[i] == foundOdds[oddChar]){
                    foundOdds.splice(oddChar,1);
                    foundMatch = true;
                    break;
                }
                console.log(foundOdds);
            }
            //if we didn't find it we need to add it
            if(!foundMatch){
                foundOdds.push(arr[i]);
            }
        }
    }
    console.log(foundOdds);

    //once the for loop is done we checked all the values and there should only be 1 value in foundOdds
    return foundOdds[0];
}
    //console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
    //console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
    // console.log(([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
    // console.log(([10], 10));
    // console.log(([1,1,1,1,1,1,10,1,1,1,1], 10));
    // console.log(([5,4,3,2,1,5,4,3,2,10,10], 1));