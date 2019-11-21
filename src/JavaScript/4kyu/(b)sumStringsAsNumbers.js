
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".



function sumStrings(a,b) { 

    if(a == ''){
        a = 0;
    }

    if(b == ''){
        b = 0;
    }

    console.log(a.length);
    console.log(b.length);



    if(a.length>=15 || b.length >=15){

        let overFlowValue = 0;
        let aLength = a.length;
        let bLength = b.length;
        let currentValue = 0;
        let newValue = [];

        console.log(currentValue);

        console.log(aLength);

        //loop through a / b array while aLength >= 0 || bLength >= 0
        while((aLength > 0 ) && (bLength > 0)){

            console.log(aLength);
            console.log(bLength);


            console.log(a[aLength-1]);
            console.log(b[bLength-1]);

            console.log(overFlowValue);
            
            currentValue = parseInt(a[aLength-1]) + parseInt(b[bLength-1]) + parseInt(overFlowValue);
            overFlowValue = 0;

            console.log(currentValue);

            //if the current value is greater than 10
            if(currentValue > 9){

                currentValue = currentValue.toString().split('').map(Number);
                console.log(currentValue[1])
                overFlowValue = currentValue[0];
                console.log(overFlowValue);
                //add currentValue.toString()[0] to overFlowValue
                console.log(currentValue.toString()[2])
                newValue.unshift(currentValue.toString()[2]);
                console.log(newValue)
                aLength--;
                bLength--;
            }
            //else just unshift the value and reset values
            else{
                
                newValue.unshift(currentValue.toString());
                aLength--;
                bLength--;
                overFlowValue = 0;
            }
        }
                
        //find which array is empty

        if(aLength == 0){
            //loop through and add the rest of b to newValue
            while(bLength >= 0){

                console.log(b[bLength])
                if(overFlowValue == undefined){
                    overFlowValue = 0;
                }

                currentValue = parseInt(a[aLength]) + parseInt(overFlowValue);
                
                console.log(currentValue)
                
                overFlowValue = 0;
                if(parseInt(currentValue) > 9){
                    
                    overFlowValue = currentValue.toString()[0];
                    newValue.unshift(currentValue.toString()[1]);
                    bLength--;
                }else{
                    console.log(currentValue);
                    newValue.unshift(currentValue.toString());
                    bLength--;
                }
            }

        }else if(bLength == 0){
            while(aLength >= 0){

                if(overFlowValue == undefined){
                    overFlowValue = 0;
                }
                console.log(parseInt(a[aLength]));
                console.log(overFlowValue);
                console.log(parseInt(a[aLength]) + parseInt(overFlowValue));
                
                currentValue = parseInt(a[aLength]) + parseInt(overFlowValue);
                overFlowValue = 0;
                
                console.log(currentValue)

                if(parseInt(currentValue) > 9){
                    console.log(currentValue.toString()[1])
                    overFlowValue = currentValue.toString()[0];
                    console.log(overFlowValue)
                    newValue.unshift(currentValue.toString()[1]);

                    aLength--;
                }else{
                    console.log(currentValue.toString())
                    newValue.unshift(currentValue.toString());
                    aLength--;
                }
            }
        }
        return newValue.join('');
    }
    return ((parseInt(a)) + (parseInt(b))).toString();
}



//console.log(sumStrings('123','456'),'579')
//console.log(sumStrings('','5'),'579')
//console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329')
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'), '131151201344081895336534324866')


