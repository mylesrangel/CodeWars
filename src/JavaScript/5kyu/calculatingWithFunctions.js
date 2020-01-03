// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

let first = '';
let second = '';
let maths = '';



function zero(){}
function one(){}
function two(){}
function three(){}
function four(){}
function five(first, math) {
    //console.log(eval('1' + '+' + '2'));
    console.log(math);
    if(first == undefined){
        console.log("Here")
        first = '5';
        return first;
    }
}
function six(){}
function seven(first){
    console.log(math);
    if(math){
        second = '7';
        //console.log(eval('1' + '+' + '2'));
        console.log(first);
        return eval(first + math + second);
    }
}
function eight(){}
function nine(){}


function plus(){}
function minus(){
    
}
function times(first){
    console.log(first);
    math =  '+';
    return math;
}
function dividedBy() {}



console.log(seven(times(five())), 35);
// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);