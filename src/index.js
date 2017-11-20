import {
    chunk
} from './chunk.js'
import {
    compact
} from './compact.js'
import {
    difference
} from './difference.js'
import {
    drop
} from './drop.js'

// console.log(chunk(['a', 'b', 'c', 'd'], 3))

// let ob = {
//     a: 1,
//     b: 2
// }
// let tem = compact([0, 1, 2, 3, '', false, NaN, 's', ob])
// console.log(tem)

// ob.a = 3
// console.log(tem)

let a = [1, 2, 3, 4, 5, 'a', [1, 2, 3], {
    'a': 1,
    'b': 2
}]
// let b = [1, 2, [1, 2, 3, 4], {
//     'a': 1,
//     'b': 2
// }]
// let c

console.log(drop(a, 10))