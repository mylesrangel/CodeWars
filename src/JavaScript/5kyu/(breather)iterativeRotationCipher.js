// In this kata, your task is to implement what I call Iterative Rotation Cipher (IRC). To complete the task, you will create an object with two methods, encode and decode. (For non-JavaScript versions, you only need to write the two functions without the enclosing dict)

// Input
// The encode method will receive two arguments — a positive integer n and a string value.

// The decode method will receive one argument — a string value.

// Output
// Each method will return a string value.

// How It Works
// Encoding and decoding are done by performing a series of character and substring rotations on a string input.

// Encoding: The number of rotations is determined by the value of n. The sequence of rotations is applied in the following order:
//  Step 1: remove all spaces in the string (but remember their positions)
//  Step 2: shift the order of characters in the new string to the right by n characters
//  Step 3: put the spaces back in their original positions
//  Step 4: shift the characters of each substring (separated by one or more consecutive spaces) to the right by n
// Repeat this process until it has been completed n times in total.
// The value n is then prepended to the resulting string with a space.

// Decoding: Decoding simply reverses the encoding process.

// Test Example
// let quote = `If you wish to make an apple pie from scratch, you must first invent the universe.`;
// let solution = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`;
// IterativeRotationCipher.encode(10,quote) === solution; //true


// /* Step-by-step breakdown:
// Step 1 — remove all spaces:
// `Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventtheuniverse.`

// Step 2 — shift the order of string characters to the right by 10:
// `euniverse.Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventth`

// Step 3 — place the spaces back in their original positions:
// `eu niv erse .I fyou wi shtom ake anap plepiefr oms crat ch,yo umustf irs tinventth`

// Step 4 — shift the order of characters for each space-separated substring to the right by 10:
// `eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt`

// Repeat the steps 9 more times before returning the string with `10 ` prepended.
// */
// Technical Details
// Input will always be valid.
// The characters used in the strings include any combination of alphanumeric characters, the space character, the newline character, and any of the following: _!@#$%^&()[]{}+-*/="'<>,.?:;.
// If you enjoyed this kata, be sure to check out my other katas.



//shifts the values of each substring by n
function shiftOrderOfSubstring (str, n) {
    var tempValue = '';

    var strLength = str.length;

    console.log(strLength)

    console.log(str);

    for(var i = 0; i<n; i++){
        //taking of the last value

        tempValue = str.slice(-1);
        console.log(tempValue);
        //adding that value to front of the str
        console.log(str);
        //console.log(tempValue + str);
        str = tempValue + str;
        //removing that value from the end
        console.log(str);
        //console.log(str.slice(0, strLength));
        str = str.slice(0, strLength);
        console.log(str);
    }
    return str;
}

//takes str and removes the first value and places it on the back n times and returns the value
//TESTS for unShiftOrderOfSubstring(): seer -> erse | oufy -> fyou | frplepie ->plepiefr
function unShiftOrderOfSubstring (str, n) {

    var tempValue = '';

    var strLength = str.length;

    console.log(str);

    for(var i = 0; i<n; i++){
        console.log(i);
    
        console.log(i)
        //taking of the last value
        console.log(str);

        tempValue = str.slice(0,1);

        console.log(tempValue);

        str = str.slice(1,strLength) + tempValue;

        console.log(str);
    }
    console.log(str);
    return str;
}

function putSpacesBackInStringAndShiftOrder(str, spaceLocations , n){

    //LOOP THROUGH AND PUT THE SPACES BACK INTO PLACE
    var tempStr = '';

    //console.log(unShiftOrderOfSubstring('seer',n));
    console.log(str);
    console.log(spaceLocations);

    //need to remove all spaces before unshifting the order of the substring
    str = removeAllSpacesFromString(str);

    console.log(str);

    for(var i = 0; i < spaceLocations.length; i++){

        //put the first space into place and store the string in new Variable
        if(i === 0){
            tempStr += unShiftOrderOfSubstring((str.slice(i, spaceLocations[i])), n);

        //place all the other spaces in the string
        //NOTE: ShiftOrderOfSubstring() shifts the values
        }else if(i < spaceLocations.length){
            tempStr +=  ' ' + unShiftOrderOfSubstring(str.slice((spaceLocations[i - 1] -(i-1)), spaceLocations[i] - i), n);
        }

    }

    tempStr += ' ' + str.slice(spaceLocations[spaceLocations.length - 1] - (spaceLocations.length - 1));

    console.log(tempStr);
    return tempStr;
}

//Takes in the string and the array to hold the locations
function findSpaceLocations(str, spaceLocations){

    for(var i = 0; i<str.length; i++){
        if(str[i] == ' '){
            spaceLocations.push(i);
        }
    }
    return spaceLocations;
}

function addAllSpacesToString(str,spaceLocations){
    var tempStr = '';

    for(var i = 0; i < spaceLocations.length; i++){

        //put the first space into place and store the string in new Variable
        if(i === 0){
            tempStr += str.slice(i, spaceLocations[i]) + ' ';

        //place all the other spaces in the string
        //NOTE: ShiftOrderOfSubstring() shifts the values
        }else if(i < spaceLocations.length){
            tempStr +=  ' ' + str.slice((spaceLocations[i - 1] -(i-1)), spaceLocations[i] - i);
        }
    }

    tempStr += ' ' + str.slice(spaceLocations[spaceLocations.length - 1] - (spaceLocations.length - 1));

    console.log(tempStr);
    return tempStr;
}

function removeAllSpacesFromString(str){
    //remove all the spaces from the string
    var removeSpaces = /\s/g;

    return str.replace(removeSpaces, '');
}

///TODO: This is hacky, needs a rework, the last value at the end of the function is not correct (L: 200)
///Need a better way to traverse the letters in each substring?
function shiftOrderAndPutSpacesBackInString(str, spaceLocations, n){

    let tempStr = '';

    for(var i = 0; i < spaceLocations.length; i++){

        //put the first space into place and store the string in new Variable
        if(i === 0){
            tempStr += shiftOrderOfSubstring((str.slice(i, spaceLocations[i]) + ' ' ), n);

        //place all the other spaces in the string
        //NOTE: ShiftOrderOfSubstring() shifts the values
        }else if(i < spaceLocations.length){
            tempStr += ' ' + shiftOrderOfSubstring(str.slice((spaceLocations[i - 1] -(i-1)), spaceLocations[i] - i), n);
        }
    }
    //tempStr += ' ' + str[str.length-1] + shiftOrderOfSubstring(str.slice(spaceLocations[spaceLocations.length - 1] - (spaceLocations.length - 1), str.length -1));



    console.log(tempStr);


    //NEED TO EQUAL: eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt


    return tempStr;


}

const IterativeRotationCipher = {};

IterativeRotationCipher.encode = function(n,str){
    //your code goes here. you can do it!
    console.log(str);
    
    let spaceLocations = [];
    let newStr = '';
    let count = 0; 
    

    //while(count < n){

        console.log(str);

        ///STEP 1
        //find all the locations of spaces
        if(count === 0){
            spaceLocations = findSpaceLocations(str, spaceLocations);
        }
        
        console.log(spaceLocations);
        
        //remove all spaces in the string
        str = removeAllSpacesFromString(str);
        
        console.log(str);

        console.log(str.length - 10);

        //STEP 2

        //shift the chars of str by n 

        //remove the nth amount of values off the end 
        shiftingStringValues = str.substring(str.length - n);
        console.log(shiftingStringValues);
        //and shift them on the front
        str = shiftingStringValues.concat(str);
        //remove the n values off the end
        str = str.substring(0, str.length - n);

        console.log(str);
        console.log(str[2])
        console.log(str[6])
        console.log(str[72])

        //STEP 3
        
        console.log(spaceLocations);
        console.log(spaceLocations.length);

        console.log(spaceLocations[spaceLocations.length - 1]);

        str = shiftOrderAndPutSpacesBackInString(str, spaceLocations, n);

        console.log(str);
        count++;
    //}

    console.log(str);
    //should return '10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet'
    return '10' + str;
};



IterativeRotationCipher.decode = function(str){

    let n = 0;
    let spaceLocations = [];

    let tempStr = '';



    //find n
    n = str.substring(0, str.indexOf(' '));

    //slice out the n value from the beginning of thestring
    str = str.slice(str.indexOf(' ')).trim();


    findSpaceLocations(str,spaceLocations);

    console.log(spaceLocations)

    //STEP 1
    // Shift the chars of each substring by n

    str = putSpacesBackInStringAndShiftOrder(str , spaceLocations , n);
    console.log(str);
    
    //STEP 3
    //and remove the spaces
    str = removeAllSpacesFromString(str);

    console.log(str);

    //STEP 3
    //shift nth value off the front onto the back

    console.log(str);
    console.log(n);

    tempStr = str.slice(0,n);
    console.log(tempStr);

    str = str.slice(n) + tempStr;

    console.log(str);


    //STEP 4
    //add all spaces into the string

    str = addAllSpacesToString(str,spaceLocations);

    console.log(str);

    return str;
};


//TESTING
const encodeExamples = [
	[10,`If you wish to make an apple pie from scratch, you must first invent the universe.`],
// 	[14,`True evil is a mundane bureaucracy.`],
// 	[22,`There is nothing more atrociously cruel than an adored child.`],
// 	[36,`As I was going up the stair
// I met a man who wasn't there!
// He wasn't there again today,
// Oh how I wish he'd go away!`],
// 	[29,`I avoid that bleak first hour of the working day during which my still sluggish senses and body make every chore a penance.
//I find that in arriving later, the work which I do perform is of a much higher quality.`]
];
const decodeExamples = [
    //testing string
    `10 eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt` //should return 'If you wish to make an apple pie from scratch, you must first invent the universe.'
////////////////////////////////
	//`10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`,
// 	`14 daue ilev is a munbune Traurecracy.`,
// 	`22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa`,
// 	`36 ws h weA dgIaa ug owh n!asrit git 
//  msm phw teaI'e tanantwhe reos
// s ther! aHeae 'gwadin
// t haw n htoo ,I'i sy aohOy`,
// 	`29 a r.lht niou gwryd aoshg gIsi mk lei adwhfci isd seensn rdohy mo kleie oltbyhes a
// aneu p.n rndr tehh irnne yifav t eo,raclhtc frpw IIti im gwkaidhv aicufh ima doea eruhi y io qshhcoa kr ef l btah gtrrse otnvugrt`
];



console.log(encodeExamples.forEach((e,i) => console.log(IterativeRotationCipher.encode(...e),decodeExamples[i])));
console.log(decodeExamples.forEach((e,i) => console.log(IterativeRotationCipher.decode(e),encodeExamples[i][1])));