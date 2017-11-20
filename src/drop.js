/**
 * @description 将arr中的前num个元素去掉, 然后返回剩余的部分
 * @param {Array} arr 
 * @param {Number} num 
 */

function drop (arr, num = 1) {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return 'wrong args'
    }
    if (typeof num === 'number' && num >= 0) {
        return arr.slice(num)
    } else {
        return 'wrong number'
    }
}

export { drop }
