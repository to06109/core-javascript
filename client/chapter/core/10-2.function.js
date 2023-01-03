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

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수: arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
  // 배열의 능력 : forEach, reduce

  let total = 0
  // console.log('유사배열', arguments)

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

/* 
movePage('https://www.naver.com',
(url)=>{  window.href = url},
()=>{})
 */

// 콜백 함수 (표현)식
let movePage = function (url, resolve, reject) {
  if (typeof url === 'string' && url.match(/http.+www/)) {
    resolve(url)
  } else {
    reject()
  }
}

movePage(
  'http://www.naver.com',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`)
  },
  function () {
    throw new Error('url 입력 정보가 올바르지 않습니다.')
  },
)

/* forEach는 내부에 이런 식으로 구현되어 있을려나요? O
forEach(function(){}, currentValue, index, array, thisArg){}

arr.forEach(function(item, index){})
*/

// 함수 선언문 vs. 함수 (표현)식

const user = {
  name: 'tiger',
  age: 32,
}

function aa() {
  console.log(this)
}

let call = aa.call(user)
let bind = aa.bind(user)

const bb = function () {}

/* ---------------------------------------------------------------------------------- */
// 즉시 실행 함수 (표현)식
// 즉시 호출될 수 있는 함수의 표현식
// Immediately Invoked Function Expression <- 디자인 패턴 중에 하나.
// 전역을 보호하기 위해서 썼었음
let IIFE

  // 이렇게 ()를 쳐주면 즉시실행
;(function () {
  console.log('hi')
})

//var를 보호할 수 있는 유일한 방법: 함수 스코프
//  var 함수 스코프
//  let, const  블록 스코프

// 이러면 외부에서 x를 쓸 수 있음
/* {
  var x = 1
}

console.log(x) // 1

// var를 함수 안에 넣으면 외부에서 쓸 수 없음 -> 전역 오염 안됨
function cc() {
  var y = 1
}

console.log(y) // error */

// 너 getNode 이거 나가

// getNode 받아

// const MASTER = (function(){

//   const KEY = 'alcls@#@!$%'

//   return {
//     getKey: function (){
//       return KEY
//     }
//   }
// })();
;(function () {
  // parameter
  var alpha = 1
  console.log('Hi~')
})()
;(function ($) {
  console.log($) // window가 출력됨
})(window)

// IIFE 패턴을 어디에 사용하냐-
const MASTER = (function ($) {
  const KEY = 'aalsdf!@#$@#%'

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation: 외부의 접근을 차단
  // 일부 정보만 노출

  console.log($('.first'))

  return {
    getKey: function () {
      return KEY
    },
  }
})(getNode) //arguments

// console.log(getKey()) // 접근 error
console.log(MASTER.getKey()) // 두번째 element 내보냄
/* ---------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* 모듈 프로그래밍                                                                   */
/* -------------------------------------------------------------------------- */

// 📂 10-2.function.js

export function getNode(node) {
  return document.querySelector(node)
}

// 📂 index.js

import { getNode as $ } from './10-2.function.js'
