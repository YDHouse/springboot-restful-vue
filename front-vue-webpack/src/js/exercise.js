// let evens = [2, 4, 6, 8]
// let odd2 = evens.map(function (evens) {
//   evens = evens + 2
//   return evens
// })
// let odds = evens.map((z) => z + 1)
// let nums = evens.map((v, i) => v + i)
// let pairs = evens.map((v) => ({ even: v, odd: v + 1 }))
// console.log('odds :>> ', odds)
// console.log('odd2 :>> ', odd2)
// console.log('nums :>> ', nums)
// console.log('pairs :>> ', pairs)

// nums.forEach((v) => {
//   if (v % 5 === 0) evens.push(v)
//   console.log('v :>> ', v)
//   console.log('evens :>> ', evens)
// })
// console.log('nums2 :>> ', nums)

let bob = {
  _name: 'Bob',
  _friends: ['John, Brian', 'hahaha'],
  printFriends() {
    console.log(this)
    this._friends.forEach((f) => console.log(this._name + ' knows ' + f))
  },
}
// bob.printFriends()

class Shape {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log('my name is', this.name)
  }
}
class Rectangle extends Shape {
  constructor(w, h) {
    super(w, h)
    this.w = 2
    this.h = 10
  }
  getArea(w, h) {
    let shape = new Shape('홍길동')
    shape.say()
    let returnVal = shape.name + '님의 나이는 ' + w * h + ' 입니다.'
    return returnVal
  }
}
let rect = new Rectangle('하하하')
rect.name = '호호호'
console.log(rect.name)
console.log(rect.w)
console.log(rect.h)
console.log(rect.getArea(3, rect.h))
console.dir(rect)

const a = (num) => {
  return num * 10
}
const b = (num) => num * 10
function z(num) {
  return num * 10
}
console.log(a(10))
console.log(b(5))
console.log(z(2))
