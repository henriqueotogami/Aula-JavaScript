class Math {
    sum = function sum (a, b, callback) {
        setTimeout(() => {
        callback(a + b);
        }, 0);
    },
    multiply(a, b) {
        return a * b;
    }
}

module.exports = Math;