// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



var uniqueInOrder=function(iterable){
    
    //super awesome object
    const answer = [];
    console.log(iterable[0]);

    for(let i = 0; i<iterable.length; i++){
        let count = i;
        console.log(iterable[i]);
        answer.push(iterable[i]);
        if(iterable[i] === iterable[i+1]){
            while(iterable[i] === iterable[count]){
                console.log(iterable[count]);
                count++;
            }
            i = count - 1;   
        }
    }
    console.log(answer);
    return answer;
}


//console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
console.log(uniqueInOrder('AAD'));
//console.log(uniqueInOrder([1,2,3]));

