import { chunk } from './chunk.js'
import { compact } from './compact.js'

// console.log(chunk(['a', 'b', 'c', 'd'], 3))

let ob = {
    a: 1,
    b: 2
}
let tem = compact([0, 1, 2, 3, '', false, NaN, 's', ob])
console.log(tem)

ob.a = 3
console.log(tem)
