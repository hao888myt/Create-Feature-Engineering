/**
 * 将=转换为:
 * @param {string} str 
 * @returns 
 */
function transformNBT(str) {
    str = str.replace("false", `"false"`)
    str = str.replace("true", `"true"`)
    str = str.replace("=", ":")
    return str
}
