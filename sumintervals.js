/*
    Sum of Intervals
    http://www.codewars.com/kata/sum-of-intervals

*/

function sumIntervals(intervals) {
    let filtered = [];
    intervals.forEach(element => {
        for (let i = element[0]; i < element[1]; i++) {
            filtered.push(i);
        }
    });

    return [...new Set(filtered)].length;
}

export default sumIntervals;
