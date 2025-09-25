/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 ===1) return false
    let map = {
        "(":")",
        "{":"}",
        "[":"]",
    }
    let index = 0
    let stack = []

    while(index < s.length) {
        if (map[s[index]]) {
            stack.push(s[index])
            index++
            continue
        } else if (!map[s[index]] && map[stack[stack.length - 1]] === s[index]) {
            stack.pop()
            index++
            continue
        } else {
            return false
        }
    }
    if (stack.length === 0) return true
    return false
};
