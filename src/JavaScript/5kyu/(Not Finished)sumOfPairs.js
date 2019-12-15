// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


// var sum_pairs=function(ints, s){


//     //store what the current answer is
//     let currentAnswer = [];
//     //store the possible answer being looked at
//     let possibleAnswers = [];
//     //possibleIndex Values
//     let possibleIndexValues = 0;
//     //if the indexFound is equal to itself we add one
//     let duplicate = 0;

//     console.log(s);
//     console.log(ints);

//     for(var i = 0; i<ints.length; i++){
//         //if s is positive number
//         if(s >= 0){

//             duplicate = 0;

//             console.log(ints.indexOf((s - ints[i])));
//             //check if it finds it's own index
//             if((ints.indexOf(s - ints[i]) == i)){
//                 duplicate++;
//             }

//             if(ints.indexOf((s - ints[i+duplicate]) >= 0)){

//                 console.log(ints[ints.indexOf(s - ints[i+duplicate])]);
//                 console.log(ints[ints.indexOf(s - ints[i])]);

//                 //if there is no undefined value
//                 console.log(ints[ints.indexOf(s -ints[i])])
//                 if(ints[ints.indexOf(s -ints[i+duplicate])] != undefined){                 

//                     possibleAnswers = [ints[i+duplicate] , ints[ints.indexOf(s - ints[i+duplicate])]];
                    
//                     possibleIndexValues = [i , ints.indexOf(s-ints[i+duplicate])].sort();              

//                     console.log((possibleIndexValues[1]));
//                     console.log((possibleIndexValues[0]));
                
//                     //if the possible index values are closer together than current answers: this is our new answer
//                     console.log((possibleIndexValues[1] - possibleIndexValues[0] < currentAnswer[1]));

//                     if((possibleIndexValues[1] - possibleIndexValues[0] < currentAnswer[1]) || (currentAnswer[1] == undefined)){
//                         //pop is to remove the value in the array
//                         currentAnswer.pop();
//                         currentAnswer.push(possibleAnswers, [possibleIndexValues[1] - possibleIndexValues[0]]);
                        
//                     }
//                     console.log(currentAnswer)
                    
//                 }
//             }
//         }
//         else if(s < 0){
//             if(ints.indexOf((s + ints[i]) >= 0) && (ints.indexOf(s + ints[i]) != i)){
//                 //store the answer in an array
//                 //if there is no undefined value
//                 if(ints[ints.indexOf(s +ints[i])] != undefined){                   
//                     possibleAnswers = [ints[i] , ints[ints.indexOf(s + ints[i])]];
                    
//                     possibleIndexValues = [i , ints.indexOf(s+ints[i])].sort(); 
                
//                     //if the possible index values are closer together than current answers: this is our new answer
//                     if((possibleIndexValues[1] - possibleIndexValues[0] < currentAnswer[1]) || (currentAnswer[1] == undefined)){
//                         currentAnswer.pop();
//                         currentAnswer.push(possibleAnswers, [possibleIndexValues[1] - possibleIndexValues[0]]);
//                     }
//                 }
//             }
//         }
//     }

//     //check which array value has a closer second index and return that value
//     return currentAnswer[0];
// };



var sum_pairs=function(ints, s){

    console.log(typeof(ints));
    console.log(ints);
    console.log(s);

    let currentAnswer = [];

    //loop through the array
    for(var i = 0; i<ints.length; i++){
        //look for the value of s - int[i] that is not itself
        for(let n = 0; n < ints.length; n++){
        //if that value is in the array find the distance between the two
            //positive Number
            if((s - ints[i] == ints[n] && n != i)){


                currentAnswer.push([ints[n] , ints[i]], Math.abs(i-n));
                // currentAnswer[0].sort();
                // currentAnswer.push([Math.abs(i-n)]);
                
            }
            console.log(currentAnswer);

        }


    }

    console.log(currentAnswer);

    return currentAnswer[0];
};





l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

// console.log(sum_pairs(l1, 8),[1, 7]);
// console.log(sum_pairs(l2, -6),[0, -6]);
// console.log(sum_pairs(l3, -7), undefined);
console.log(sum_pairs(l4, 2),[1, 1]);
// console.log(sum_pairs(l5, 10),[3, 7]);
// console.log(sum_pairs(l6, 8),[4, 4]);
// console.log(sum_pairs(l7, 0),[0, 0]);
// console.log(sum_pairs(l8, 10),[13, -3]);


