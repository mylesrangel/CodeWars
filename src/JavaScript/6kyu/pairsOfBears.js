// In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

// You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

// Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

// Return an array containing a string of only the mating pairs available. e.g:

// 'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

// and true if the number is more than or equal to x, false if not:

// (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

// x will always be a positive integer, and s will never be empty




function bears(x, s){

    console.log(typeof(x));
    console.log(x);
    console.log(typeof(s));
    console.log(s);

    let bearPairs = '';

    //loop through s
    for(let i = 0; i<s.length; i++){
        console.log(s[4]);
        
        //find all the matching pairs of "B8" or "8B"
        if(s[i] == 'B' && s[i+1] == '8'){
            console.log(s[i] , s[i+1]);
            bearPairs = bearPairs.concat(s.slice(i,i+2)); 
            i++;
            console.log(bearPairs);
        }else if(s[i] == '8' && s[i+1] == 'B'){
            console.log(s[i] , s[i+1]);
            bearPairs = bearPairs.concat(s.slice(i,i+2)); 
            i++;
            console.log(bearPairs);
        }

    }
    //if the new array size / 2 is greater than x return true else return false
    if(Math.ceil(bearPairs.length / 2) >= x){
        return [bearPairs, true];
    }else{
        return [bearPairs, false];
    }
}


console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]); 
console.log(bears(8, '8'), ["",false]); 



//BEST PRACTICE

// function bears(x, s){
//     var pairs = s.match(/(8B)|(B8)/g) || [];
//     return [pairs.join(""), pairs.length >= x];
//   }

