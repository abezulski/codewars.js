/*
    Reduce but Grow
    http://www.codewars.com/kata/beginner-reduce-but-grow

    Given an array of integers (x), return the result of multiplying the values together in order.
    Example: [1, 2, 3] --> 6
*/

function reduceGrow(input) {
    return input.reduce((a, b) => a * b);
}

export default reduceGrow;