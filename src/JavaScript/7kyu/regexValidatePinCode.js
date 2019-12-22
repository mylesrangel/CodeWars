// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


function validatePIN (pin) {
    //return true or false
    
    reg = /^\d+$/;

    pin = pin.split('');
    console.log(pin)
    console.log(pin.length);

    console.log(pin.every(number => number.match() === (/\d+$/)));
    console.log(pin.some(number => isNaN(number)));

    console.log(reg == pin[0])

    


    console.log(pin);

    //console.log(pin.some(number => number === ' ');

    //if the length of pin length is equal to 4 or 6 and only contains numbers [0-9]
     if((pin.length == 4 || pin.length == 6) && (pin.every(number => number >= '0' && number <= '9'))){
         return true;
     }else{
         return false;
     }
}

console.log(validatePIN("123 \n"),false, "Wrong output for '1'");
// console.log(validatePIN("12"),false, "Wrong output for '12'");
// console.log(validatePIN("123"),false, "Wrong output for '123'");
// console.log(validatePIN("12345"),false, "Wrong output for '12345'");
// console.log(validatePIN("1234567"),false, "Wrong output for '1234567'");
// console.log(validatePIN("-1234"),false, "Wrong output for '-1234'");
// console.log(validatePIN("1.234"),false, "Wrong output for '1.234'");
// console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'");
// console.log(validatePIN("00000000"),false, "Wrong output for '00000000'");
// console.log(validatePIN("a234"),false, "Wrong output for 'a234'");
// console.log(validatePIN(".234"),false, "Wrong output for '.234'");
// console.log(validatePIN("1234"),true, "Wrong output for '1234'");
// console.log(validatePIN("0000"),true, "Wrong output for '0000'");
// console.log(validatePIN("1111"),true, "Wrong output for '1111'");
// console.log(validatePIN("123456"),true, "Wrong output for '123456'");
// console.log(validatePIN("098765"),true, "Wrong output for '098765'");
// console.log(validatePIN("000000"),true, "Wrong output for '000000'");
// console.log(validatePIN("123456"),true, "Wrong output for '123456'");
// console.log(validatePIN("090909"),true, "Wrong output for '090909'");