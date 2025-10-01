/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0
    const isNegative = x < 0
    let number = isNegative ? x * -1 : x
    let reversed = 0
    while (number > 0) {
        reversed = reversed * 10
        reversed += number % 10
        number = parseInt(number / 10)
    }
    if (!(reversed <= DataView.prototype.getInt32())) return 0
    return isNegative ? reversed * -1 : reversed
};