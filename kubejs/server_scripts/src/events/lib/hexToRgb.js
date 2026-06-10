/**
 * @param {string} hex 
 * @returns 
 */
function hexToRgb(hex) {
    // 移除开头的 '#' 并处理缩写形式（如 #010）
    let normalizedHex = hex.replace(/^#/, '');

    let r = parseInt(normalizedHex.substring(0, 2), 16);
    let g = parseInt(normalizedHex.substring(2, 4), 16);
    let b = parseInt(normalizedHex.substring(4, 6), 16);

    return [r, g, b];
}