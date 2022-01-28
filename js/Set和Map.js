const s = new Set()
[1,2,3,4,5,6].forEach(item => s.add(item))
for (let i of s) {
  console.log(i)
}

let arr = [1, 2, 3, 3, 1, 1, 1]
s = new Set(arr)
[...s]


let set1 = new Set()
set1.add(5)
set1.add('5')

let set = new Set([1, 2, 3])
console.log(set.keys())
console.log(set.values())
console.log(set.entries())

[...set].forEach((key, value) => {
  console.log(key + ':' + value)
})

let set1 = new Set([1, 2, 3])
let set2 = new Set([2, 3, 4])

let interset = new Set([...set1].filter(item => set2.has(item)))
let union = new Set([...set1, ...set2])
let diffrenence = new Set([...set1].filter(item => !set2.has(item)))

const m = new Map()
const o = {p: 'haha'}

const m1 = new Map([
  ['foo', 1],
  ['bar', 2]
])

const m2 = new Map(m1)
m2.get('bar')

let map = new Map()
map.set(true, 1)
map.set('true', 2)

map.get(true)

map.set(NaN, 123)

const map = new Map([[1, 1], [2, 2], [3, 3]])

function mapToObj(map) {
  if (!(map instanceof Map)) return '参数必须是个Map对象'
  let obj = Object.create(null)
  for (let [key, values] of map) {
    obj[key] = values
  }
  return obj
}

const map = new Map().set('name', 'An').set('des', 'js')
mapToObj(map)

function mapToJson(map) {
  return JSON.stringify([...map])
}

mapToJson(map)