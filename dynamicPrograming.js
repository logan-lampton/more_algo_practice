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
