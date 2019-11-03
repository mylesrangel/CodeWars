


//Given an array of values return the value at which the two days with the greatest change in temperature
//I.E. given: [22,32,10,15,27,33,50,53] // returns 23 because 27 to 50 is a temp increase of 23

//Note: the value between the days are not the lowest (10) and the highest (53)

//The answer should be given a time complexity of O(n)



function GlobalWarming(arr){
    let maxTemp = 0;
    console.log(maxTemp);

    //do magic here
    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i + 1] - arr[i] > maxTemp){
            maxTemp = arr[i+1] - arr[i];
        }
        if(arr[i+2] - arr[i] > maxTemp ){
            maxTemp = arr[i+2] - arr[i];
        }
    }
    //if the maxtemp never goes up return 0
    if(maxTemp < 0){
        return 0;
    }

    return maxTemp;
}

console.log(GlobalWarming([2,32,10,15,27,36,50,53]));
console.log(GlobalWarming([22,32,60,15,27,33,50,53]));
console.log(GlobalWarming([22,52,18,15,27,33,20,53]));
console.log(GlobalWarming([22,12,10,15,27,19,20,53]));
console.log(GlobalWarming([53,48,28,22,20,18,5,3]));
console.log(GlobalWarming([-3,-12,-19,-20,-23,-30,-45]));