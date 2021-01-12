var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return "0";
    if(denominator === 0) return `${Math.sign(numerator)}Infinity`;

    let res = "";
    if(Math.sign(numerator) !== Math.sign(denominator)) {
        res += "-";
    }
    
    let n = Math.abs(numerator);
    let d = Math.abs(denominator);
    
    res += Math.floor(n / d);
    n = n % d;
    
    if(n === 0) return res;
    
    res += ".";

    let position = {};
    
    while(n !== 0) {
        position[n] = res.length;
        n *= 10;
        res += String(Math.floor(n / d));
        n %= d;

        if(position.hasOwnProperty(n)) {
            return `${res.slice(0, position[n])}(${res.slice(position[n])})`
        }
    }

    return res;
};

