/**
 * @description 去除数组中的空元素, 并返回新数组, 默认使用 浅拷贝
 * @param {Array} arr 
 * @param {Boolean} option true为深拷贝, false为浅拷贝
 */

function compact (arr, option = false) {
    if (!arr.length || arr.length <= 0) {
        return "wrond arg"
    } else {
        let len = arr.length
        let temp = []
        for (let i = 0; i < len; i++) {
            if (arr[i] && option) {
                temp.push(JSON.parse(JSON.stringify(arr[i])))
            } else if (arr[i]) {
                temp.push(arr[i])
            }
        }
        return temp
    }
}

export { compact }
