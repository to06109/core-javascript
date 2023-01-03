/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// {

// }

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD
}

let resultX = calcTotal(10000, 8900, 1360, 2100)
let resultY = calcTotal(21500, 3200, 9800, 4700)
let resultZ = calcTotal(9000, -2500, 5000, 11900)

// console.log(resultX)
// console.log(resultY)
// console.log(resultZ)

// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
//   console.log(arguments)
//   return moneyA + moneyB + moneyC + moneyD
// }

let calculateTotal = function () {
  // console.log(arguments)

  // 함수 안에서만 접근 가능한 인수들의 집합 객첼로서 배열과 유사하여 유사 배열 타입으로 불리는 변수: arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
  // 배열의 능력 : forEach, reduce

  let total = 0

  // 유사배열을 배열로 만들어주기 (배열에서 쓸 수 있는 메소드들을 사용하기 위해)
  let arr = Array.from(arguments) //1. static method
  // slice 함수는 배열에서만 쓸 수 있음 -> Array.prototype 빌려서 쓴거임
  // 2. let Arr = Array.prototype.slice.call(arguments) // instance method

  // arr.forEach(function (item, index) {
  //   total += item
  // })

  // console.log(total)

  return arr.reduce(function (acc, item) {
    return acc + item
  })

  /* 
    for (let value of arguments) {
    total += value
    } 
  */

  /* 
    for (let i = 0; i < arguments.length;i++) {
      total += arguments[i]
    }
  */
}

// 뒤의 애들은 그냥 무시됨
calculateTotal(100, 500, 300, 150, 400, 150)

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {}

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {}

// hello() // 얘는 쓸 수 없음 -> 의미없음, 함수의 이름만 dir에 선언됨

// 콜백 함수 (표현)식
let callbackFunctionExpression = function () {}

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// let IIFE
