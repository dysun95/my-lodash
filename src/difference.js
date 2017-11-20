/**
 * @description 去除arr中与value中相同的元素, 未改变原数组, 可以判别对象
 * @param {Array} arr 
 * @param {*} value 
 */

function difference (arr, value) {
    // 判断value是否为数组
    if (!Array.isArray(arr) || arr.length <= 0) {
        return 'wrong args'
    }
    if (Array.isArray(value) && value.length > 0) {
        let temp = [...arr]
        let aLen = temp.length
        let vLen = value.length
        for (let i = 0; i < aLen; i++) {
            for (let j = 0; j < vLen; j++) {
                if (JSON.stringify(temp[i]) === JSON.stringify(value[j])) {
                    temp.splice(i, 1)
                    i--
                    aLen--
                    break
                }
            }
        }
        return temp
    } else if (value) {
        let temp = [...arr]
        let aLen = temp.length
        for (let i = 0; i < aLen; i++) {
            if (JSON.stringify(temp[i]) === JSON.stringify(value)) {
                temp.splice(i, 1)
                i--
                aLen--
            }
        }
        return temp
    } else {
        return 'none value'
    }
}

export { difference }
