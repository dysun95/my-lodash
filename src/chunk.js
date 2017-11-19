/**
 * @description 根据num将arr切分成子数组并合为一个数组返回, 默认使用 浅拷贝
 * @param {Array} arr 
 * @param {Number} num 
 * @param {Boolean} option true为深拷贝, false为浅拷贝
 */

function chunk(arr, num, option = false) {
    if (!arr.length || arr.length <= 0 || num <= 0) {
        return 'wrong args'
    } else {
        let len = arr.length
        let n = parseInt(len / num)
        let m = len % num
        let temp = []
        if (n > 0) {
            for (let i = 0; i < n; i++) {
                option ? temp.push(JSON.parse(JSON.stringify(arr.slice(num * i, num * (i + 1))))) : temp.push(arr.slice(num * i, num * (i + 1)))
            }
        }
        if (m > 0) {
            option ? temp.push(JSON.parse(JSON.stringify(arr.slice(n * num, len)))) : temp.push(arr.slice(n * num, len))
        }
        return temp
    }
}

export { chunk }
