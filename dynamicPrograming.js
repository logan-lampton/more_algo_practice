// Dynamic Programing is an approach that works for some problems, where the problem is broken down into smaller parts that are solved.
// A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

// Dynamic programing only works if we have:
    // 1. An optimal substructure
    // 2. Overlapping subproblems

// Overlapping Subproblems
    // A problem that is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

// Ex Overlapping Subproblems: Fibonacci Sequence
    // Every number after the first two is the sum of the two preceding ones
    // 1+1 = 2; 1+2 = 3; 2+3 = 5; etc.
    // Look for repetition in needing to solve subproblems to find the answer
    // There would be a ton of repetition in addition to find the 100th number in the Fibonacci sequence

// Merge Sort is an example of subproblems that don't overlap
    // It lends itself to "Divide and Conquer"

// Optimal Substructure
    // Definition: A problem is said to have an optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
    // Ex: Shortest Path:
        // The shortest route in a path of vertices, it will be the shortest path to each part within the route. A => B => C => D calculating each of the values of the edges helps get the final solution
        // Longest simple path is NOT optimal substructure
        // Booking airline tickets is NOT optimal substructure

// Recursive example with the Fibonacci Sequence (slow version)
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// The big O of the Fibonacci Sequence is not great
    // Approximately Big O of 2N (very bad)

// Memoization
    // A way to remember (store) our answers to speed up the algorithm a lot.

// A Memo-ized solution:
function fibonacci(n, memo = []){
    // checks to see if the value of memo is already stored, if so, it returns the value and skips the rest
    if(memo[n] !== undefined) return memo[n];
    // base case of 1 or 2
    if(n <= 2) return 1;
    // recursive function that passes through memo to accumulate the data
    let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    // store memo of n
    memo[n] = res;
    return res;
}
// You would not need to calculate the entire other trees if you have the top value saved in the memo
// The time complexity is O(N)
    // Grows linearly with N
        // (1 more per each additional number)
    // This is a HUGE improvement

// Tabulation: A bottom up approach
    // A second option, instead of the top-down Memoization method
    // Storing a result of a previous result in a "table" (usually an array)
    // Usually done using iteration
    // Better space complexity can be achieved using tabulation

function tabulatedFib(n){
    if(n <= 2) return 1;
    // starting array
    let fibNums = [0, 1, 1];
    // loop for anything starting at the index of 3
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i -2];
    }
    return fibNums[n];
}

// unlike the memoization recursive version, the tabulated example will not hit a stack overflow
// The time complexity of tabulation and memoization are both O(N)
// The space complexity of the tabulation version is better than that of the memoization version.