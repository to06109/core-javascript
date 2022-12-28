/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null)

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined)

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = 'hello'
let message2 = 'hello'

let nickName = 'yesong'
let message3 = `Hello My name is ${nickName}!` // template literal 방식은 선언과 할당을 같이 해줘야한다.
let message4 = `calculate 3 and 4 = ${3 + 4}!`

console.log(message3)
console.log(message4)

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123

console.log('number : ', typeof number) // number :  number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12913n) // bigint.
// console.log(12913n + 10) // error. bigInt에는 bigInt를 연산해줘야함
console.log(12913n + 12345n) // 25258n.

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true) //boolean.

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {}) // object.

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid')) //symbol.

console.log(typeof Math) // object.

const fnc = function () {}

console.log(typeof fnc) // function

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
/* key value */
// const user = new Object()
const user = {
  // 객체 리터럴
  name: 'tiger',
  age: 21,
}

console.log(user)
console.log(user.name)

// Array (배열)
/* collection */
// let list = new Array()
let list = [10, 100, 1000, 1, 2, 3] // 배열 리터럴

console.log(list)

// function 함수
function sum(a, b) {
  return a + b
}

console.log(sum(2, 3))

// this
