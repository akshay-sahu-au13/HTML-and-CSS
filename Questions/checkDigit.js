function checkDigit(membershipId) {
    // your code here
    let digit = 0;
    while (membershipId != 0){
        digit += membershipId % 10;
        membershipId = Math.floor(membershipId/10); 
    };

    if (digit >= 10) {
        return checkDigit(digit)
    }
    else {
        return digit
    }

    };

console.log(checkDigit(55555))
console.log(checkDigit(1553555))
console.log(checkDigit(3555))
