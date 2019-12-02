// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100



function validParentheses(parens){
    //TODO 
    console.log(typeof(parens));
    console.log(parens);
    console.log(parens[0]);

    const opposite = {
        '(': ')',
        ')': '('
    };

    console.log(opposite[parens[0]])
    parens.split('').map((valve, index, arr))
}

console.log(validParentheses( "()" ), true);
//console.log(validParentheses( "())" ), false);