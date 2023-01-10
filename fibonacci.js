// Write a function `fib(n)` that takes in a number as an argument.
// the function should return the n-th number of Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// EXAMPLE 

// n     : 1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...


// the complexity of this function is O(2ˆn) in time and O(n) in space.

const fib = (n) => {
    console.log(n)
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
};

// console.log(fib(5)) // returns 5
// console.log(fib(4)) // returns 3
// console.log(fib(9)) // returns 34


// memoization
// js object, keys will be arg to fn, value will the be return value

const betterFib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = betterFib(n - 1, memo) + betterFib(n - 2, memo)
    return memo[n];
}

console.log(betterFib(50))

// explanation

// EXAMAPLE: betterFib(6)

//                            6
//                   5                   4 
//              4        3            3      2 
//           3    2    2   1        2   1   
//         2   1 
// when it hits some of the base cases, it returns 1
// the memo object is encharged to store the semi-tree already calculated
// 
// memo: { 3: 2} the semi tree of 3 is 2, now stored and beeing reused on the algorithm.
// whenever the 3 tree is find, it returns the value two, because the sum of 2 base cases is always 2
// when faces the 4 tree, it sums the 2 (already stored on memo) to 1 (right side children of the 4 semi tree) 
// memo: {
//   3: 2,
//   4: 3,
// }
// well, the magic happens when it comes to calc the 5's semi tree, the 4's semi tree and 3's semi tree is already stored on memo base case.
// and finally, the right children of the 6's tree is already calculated and stored on memo, it hits some of the base cases and returns the value


//  NEW RECURSIVE TREE MADE ON MEMOIZING
//                            6
//                   5                   4 
//               4       3            
//            3     2       
//         2     1 

// TIME AND COMPLEXITY

//                            9
//                          8   7 (aleady calculated and stored on memo)
//                        7   6 (aleady calculated and stored on memo)
//                      6   5 (aleady calculated and stored on memo)
//                    5   4 (aleady calculated and stored on memo)
//                  4   3 (already calculated and stored on memo)
//                3   2 
//              2   1(base case)
// 

// CONCLUSION
// memoizing the already semi trees calculated on memo, can optimize the O from an exponentia time complexity to a linear time complexity
// the Big O noation to the betterFib() calculations is 
// O(n) time complexity
// O(n) space complexity