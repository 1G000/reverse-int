module.exports = function reverse(n) {
    n = Math.abs(n).toString().split("");
    newArr = [];
    n.forEach((el) => {
        newArr.unshift(el);
    });
    return +newArr.join("");
};
