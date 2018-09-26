/*
    Make the Deadfish swim.
    https://www.codewars.com/kata/51e0007c1f9378fa810002a9

    Write a simple parser that will parse and run Deadfish.

    Deadfish has 4 commands, each 1 character long:

    - i increments the value (initially 0)
    - d decrements the value
    - s squares the value
    - o outputs the value into the return array

    Invalid characters should be ignored.

    deadfish("iiisdoso") => [ 8, 64 ]
*/

function deadfish(data) {
    let output = [];
    if (data) {
        let chars = data.toUpperCase().split('');
        let val = 0;

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === 'I') {
                val = val + 1;
            }

            if (chars[i] === 'D') {
                val = val - 1;
            }

            if (chars[i] === 'S') {
                val = val * val;
            }

            if (chars[i] === 'O') {
                output.push(val);
            }
        }
    }

    return output;
}

export default deadfish;
