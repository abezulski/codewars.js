/*
    Two to One
    https://www.codewars.com/kata/5656b6906de340bd1b0000ac

    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
    each taken only once - coming from s1 or s2.
    Examples: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

*/

function longest(s1, s2) {
    var letters = s1.split('').concat(s2.split(''));
    var result = [];

    for (var i = 0; i < letters.length; i++) {
        if (result.indexOf(letters[i]) === -1) {
            result.push(letters[i]);
        }
    }

    return result.sort().join('');
}

export default longest;
