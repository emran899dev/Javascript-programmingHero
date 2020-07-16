// var n = 80;

// for (i = 2; i < n; i++){
//     // console.log(i, n / i);
//     console.log(i, n % i);
//     if (n%i == 0) {
//         console.log('Not a Prime Number');
//         break;
//     }
// }
// console.log('Your number is prime number');

function isPrime(n) {
    for (i = 2; i < n; i++){
    console.log(i, n % i);
        if (n%i == 0) {
            return'Not a Prime Number';
            
        }
    }
    return'Your number is prime number';
}

let result = isPrime(123);
console.log(result);