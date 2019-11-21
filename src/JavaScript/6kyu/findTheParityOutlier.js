

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


function findOutlier(integers){

    //create a variable to know what we are looking for (even or odd)
    let odd = false
    let even = false

    //deterine what we are looking for
    if ((Math.abs(integers[0]) % 2 == 0 && Math.abs(integers[1]) % 2 == 0) || (Math.abs(integers[0]) % 2 == 0 && Math.abs(integers[2]) % 2 == 0) || (Math.abs(integers[1]) % 2 == 0 && Math.abs(integers[2]) % 2 == 0)){
        odd = true;
    }else if ((Math.abs(integers[0]) % 2 == 1 && Math.abs(integers[1]) % 2 == 1) || (Math.abs(integers[0]) % 2 == 1 && Math.abs(integers[2]) % 2 == 1) || ((Math.abs(integers[1]) % 2 == 1 && Math.abs(integers[2]) % 2 == 1))){
        even = true;
    }

    //loop through the integers
    for(let i = 0; i<integers.length; i++){
        if(Math.abs(integers[i]) % 2 == 0 && even == true){
            return integers[i];
        }else if (Math.abs(integers[i]) % 2 == 1 && odd == true){
            return integers[i];
        }
    }
}


//console.log(findOutlier([0, 1, 2]), 1)
//console.log(findOutlier([1, 2, 3]), 2)
//console.log(findOutlier([2,6,8,10,3]), 3)
//console.log(findOutlier([0,0,3,0,0]), 3)
//console.log(findOutlier([1,1,0,1,1]), 0)
console.log(findOutlier([167835656,-144814278,-100300792,-191485449,70775034,-85693296,37727258,-7690968,-17899686]), 0)




//BEST PRACTICE
// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }