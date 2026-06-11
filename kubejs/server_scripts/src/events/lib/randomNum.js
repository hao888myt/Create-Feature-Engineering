/**
 * 生成一个[minNum, maxNum]范围内的随机数
 * @param {number} minNum 
 * @param {number} maxNum 
 * @returns {number}
 */
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10)
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default:
            return 0;
    }
}
