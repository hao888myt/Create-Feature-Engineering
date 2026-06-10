class MathTool {
    /**
     * 生成一个[minNum, maxNum]范围内的随机数
     * @param {number} minNum 
     * @param {number} maxNum 
     * @returns {number}
     */
    static randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10)
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
            default:
                return 0;
        }
    }

    /**
     * @param {string} hex 
     * @returns 
     */
    static hexToRgb(hex) {
        // 移除开头的 '#' 并处理缩写形式（如 #010）
        let normalizedHex = hex.replace(/^#/, '');

        let r = parseInt(normalizedHex.substring(0, 2), 16);
        let g = parseInt(normalizedHex.substring(2, 4), 16);
        let b = parseInt(normalizedHex.substring(4, 6), 16);

        return [r, g, b];
    }
}