// 5! = 1*2*3*4*5

// let factorial = 1;

// for (let i = 1; i <= 5; i++){
//     factorial = factorial * i;
//     console.log(i,factorial);
// }

// function factorial(n) {
//     let factorial = 1;
//     for (let i = 1; i <= n; i++){
//         factorial = factorial * i;
//         console.log(i, factorial);
        
//     }
//     return factorial;
// }
// const result = factorial(5)
// console.log(result);

// let i = 1;
// let factorial = 1;

// while (i <= 5) {
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++;
// }
// console.log(factorial);

// function factorial(n) {

//     let i = 1;
//     let fact = 1;
    
// while (i <= n) {
//     fact = fact * i;
//     i++;
// }
//     return fact;
// }
// const result = factorial(10)
// console.log(result);

// factorialRecursive

// 0! = 1
// 5! = 4!*5
// 5! = (6-1)!*5
// n! = (n-1)!*5

function factorialRecursive(n) {
    if (n == 0) {
        return 1;
    } else {
        return n*factorialRecursive(n-1)
    }
}
let result = factorialRecursive(0)
console.log(result);