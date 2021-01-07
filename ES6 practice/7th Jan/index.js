// Count the number of prime numbers less than a non-negative number, n.

let res = []

const isPrime = (num) => {
    for(let i = 2; i*i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}

const n = 10;

for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
        res.push(i)
    }
}

console.log(`The prime numbers under ${n} are: `,...res)
console.log(`The number of prime numbers less than ${n} is "${res.length}"`)