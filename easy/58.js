/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()
    let end = s.length - 1;
    let count = 0
    while (end >= 0 && s[end] !== " ") {
        end--
        count++
    }
    return count
};