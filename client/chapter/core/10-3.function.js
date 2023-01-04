/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal0 = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD
}

// 화살표함수는 arguments(유사배열) 없음 / args(진짜배열) 있음
// 함수 밖에서 ...은 spread operator,
// 함수 안에 들어가서 매개변수로 ...을 쓰면 rest parameter라고 부른다.
const calculateTotal = (...args) => {
  console.log(args)
  let total = 0
  args.forEach((item) => {
    total += item
  })

  // args.reduce((acc, item) => acc + item)

  return total
}

let resultX = calculateTotal(10000, 8900, 1360, 2100)
let resultY = calculateTotal(21500, 3200, 9800, 4700)
let resultZ = calculateTotal(9000, -2500, 5000, 11900)

console.log(resultX)
console.log(resultY)
console.log(resultZ)

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d

/* ----------------------------------------------------------------------------- */

// 화살표 함수와 일반함수의 차이: this
function normalFunction() {
  console.log('일반함수 : ', this) // 나를 호출한 대상을 this로 참조
}

const arrowFunction = () => {
  console.log('화살표함수 : ', this) // this 자체를 binding하지 않음(this 자체가 없는거임. 부모를 찾아서 넣기 때문에 window가 들어감)
}

normalFunction()
arrowFunction()

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾는다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋아

const user0 = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    /*  let total = 0;
    this.grades.forEach((item)=>{
      this
    })
    return total */

    function foo() {
      console.log('foo : ', this)
    }

    const bar = () => {
      console.log('bar : ', this)
    }

    foo.call(user0) // user
    bar() // user object
  },
}

console.log(user0.totalGrades())

const user = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log(this)
    console.log(this.grades)
  },
}

user.totalGrades() // user(totalGrades 함수를 호출한 대상이 user), [80, 90, 100]

const user2 = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: () => {
    console.log(this)
  },
}

user2.totalGrades() // window

// 결론: 객체 안에서 메소드를 정의할 때는 arrow function이 안좋음

// 응용해보기
const user3 = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    let total = 0
    console.log('일반함수', this) // user3
    this.grades.forEach(function (item) {
      total += item
    })
    return total
  },
}

console.log(user3.totalGrades()) // 270

const user4 = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: () => {
    let total = 0
    console.log('화살표함수', this) // window
    this.grades.forEach((item) => (total += item))
    return total
  },
}

// console.log(user4.totalGrades()) // error

/* ----------------------------------------------------------------------------- */

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// for문 이용

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1
  for (let i = 0; i < powerCount; i++) {
    result *= numeric
  }
  return result
}

let powExpression = (numeric, powerCount) =>
  // n개의 열을 가진 빈 배열 만들기
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1)

console.log(pow(2, 53)) // 900719992547409992

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = ''
  while (repeatCount > 0) {
    result += text
    repeatCount--
  }
  return result
}

let repeatExpression = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '')
}

console.log(repeat('hello', 3))
console.log(repeatExpression('hello', 3))
// repeat('hello', 3) // 'hellohellohello'
