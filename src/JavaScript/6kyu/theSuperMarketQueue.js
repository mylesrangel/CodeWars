// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
 // should return 12
 // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool


function queueTime(customers, n) {
    //TODO
    
    let sum = 0;

    // if (n === 1) return sum of customers
    if(n === 1){
        sum = customers.forEach(number => sum += number);
        return sum[sum.length-1]; 
    }
    if (n >= customers.length) return Math.max(...customers);
    
    let customerLines = [];
    let lowest = -1;
    let startIndex = n;
    //add first n numbers from customers into array.
    for(let i = 0; i<n; i++){
        customerLines.push(customers[i]);
    }
    console.log(customerLines);

    //find the lowest of the first n numbers
    lowest = Math.min(...customerLines);

    console.log(customerLines.indexOf(lowest));

    //customerLines[customerLines.indexOf(lowest)] += 5;

    console.log(...customerLines);


    //add the next index of customers to lowest value of the first n numbers
    for(let i = n; i < customers.length; i++){
        //get the lowest value of customerLines
        console.log(i)
        lowest = Math.min(...customerLines);
        //add the next index to lowest value
        customerLines[customerLines.indexOf(lowest)] += customers[i];
    }

    console.log(...customerLines);

    return Math.max(...customerLines);
}

//console.log(queueTime([], 1), 0);
  console.log(queueTime([1,2,3,4], 1), 10);
//console.log(queueTime([2,2,3,3,4,4], 2), 9);
// console.log(queueTime([1,2,3,4,5], 100), 5);


//console.log(queueTime([28,19,1,2,31,36,19,10,27,17,3,33,12,14,30,47,26,18,19,45], 5), 114);
    //31 + 36 + 47
    //start with the biggest value of n

    ///TODO DONE!
// console.log(queueTime([1,46,3,47,39,40,24,26,36,31,1], 2) 148)]))
                            // line 1 line 2 
                            //   1      46           
                            //   3      39      
                            //  47      24    109
                            //  40      36
                            //  26  117  1  
                            //  31 
                            
    ///TODO THIS ONE IS CORRECT
//console.log([queueTime([2,2,1,6,2,7,6,4,7,6], 3) 16])

//                      [2,2,1,6,2,7,6,4,7,6]

//                      Till 1 Till 2 Till 3
//                        2      2      1
//                        2      7      6
//                        6      7      4
//                        6

//                        16     16     11
    



