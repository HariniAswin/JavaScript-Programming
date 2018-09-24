/**
 * Solution 1: Recursive, time complexity = O(2^n)
 * This function fib() takes an integer n and returns the nth Fibonacci number.
 * @param n = any positive integer
 */
function fib ( n ) {
    if ( n === 0 ){
        return 0;
    } else if ( n === 1 || n === 2 ) {
        return 1;
    } else {
        return fib ( n - 1 ) + fib ( n - 2 );
    }
}



/**
 * Solution 2: Recursive with Memoization, time complexity = O(n)
 * This function fib() takes an integer n and returns the nth Fibonacci number.
 * @param n = any positive integer
 */
function fibWithMemoization (n) {
    var memo = {};
    return memoize( n, memo);
}

function memoize (n, memo) {
    var result = 0;
    if ( memo[n] ) {
        result = memo[n];
    } if ( n === 0 ){
        result = 0;
    } else if ( n === 1 || n === 2 ) {
        result = 1;
    } else {
        result = memoize( n - 1,  memo ) + memoize( n - 2, memo);
    }
    memo[n] = result;
    return result;
}