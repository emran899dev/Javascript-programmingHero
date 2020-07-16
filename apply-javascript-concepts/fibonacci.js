// let fibo = [0, 1];

// // fibo[2] = fibo[2 - 1] + fibo[2 - 2];
// // fibo[3] = fibo[3 - 1] + fibo[3 - 2];
// // fibo[4] = fibo[4 - 1] + fibo[4 - 2];
// // fibo[n] = fibo[n - 1] + fibo[n - 2];
// // fibo[i] = fibo[i - 1] + fibo[i - 2];


// for (let i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     // console.log(fibo[i] ,fibo[i - 1] , fibo[i - 2]);
// }
// console.log(fibo);

// function fibonacci(n) {
//     let fibo = [0, 1];
//     for (let i = 2; i <= n; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
       
//     }
//     return fibo
// }
// let result = fibonacci(12)
// console.log(result);

// //fibonacci-Recursive

// function fibonacciRecursive(n) {
//     if (n == 0) {
//         return 0;
//     } if (n == 1) {
//         return 1;
//     }
//     else {
//         return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
//     }
// }
// var result = fibonacciRecursive(10)
// console.log(result);

// //fibonacci-series-Recursive

// [0,1,1,2,3,5,8,13,21]

function fibonacci(n) {
    if (n == 0) {
        return [0]
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        // calculate array n th element
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement)
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);