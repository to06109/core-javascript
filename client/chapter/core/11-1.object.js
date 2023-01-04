/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
// 이런 식으로 객체로 css를 표기하는 방법: emotion / styled-component
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
}

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한
let authUser = null

authUser = {
  uid: 'user-id-asdA12k3klf',
  name: 'yesong',
  email: 'to06109@naver.com',
  isSign: true,
  permission: 'paid', // free | paid
}

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid)
// console.log(authUser.name)
// console.log(authUser.email)
// console.log(authUser.isSign)
// console.log(authUser.permission)

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid'])
// console.log(authUser['name'])
// console.log(authUser['email'])
// console.log(authUser['isSign'])
// console.log(authUser['permission'])

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone' // phone | tel

function createUser(computedProp = calculateProperty) {
  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-7169-0262',
  }
}

const user = createUser('tel')

// 프로퍼티 포함 여부 확인 (in)

Object.prototype.SIGN = true // 이러면 authUser객체가 오염됨
console.log(authUser)

for (let key in authUser) {
  console.log(key)
}

// authUser 객체가 진짜 가지고있는 key값들만 출력
for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key)
  }
}

// 프로퍼티 나열
let keyArray = Object.keys(authUser) // instance 함수
let valueArray = Object.values(authUser)

function getPropertiesList(object) {
  return Object.keys(object)
}

// function getPropertiesList(object) {
//   let result = []
//   for (let key in object) {
//     if ({}.hasOwnProperty.call(object, key)) {
//       result.push(key)
//     }
//   }
//   return result
// }

let result = getPropertiesList(authUser)
console.log('키값', result)

// remove delete
// 값을 비우는 것 or 아예 없애는거
// 프로퍼티 제거 or 삭제

// 객체에서 특정 프로퍼티 제거하는 함수
function removeProperty(object, key) {
  // validation
  if (!(typeof object === 'object')) {
    // throw
  }

  object[key] = null
  console.log(object)
}

// 객체에서 특정 프로퍼티 삭제하는 함수
function deleteProperty(object, key) {
  delete object[key]
  console.log(object)
}

removeProperty(authUser, 'name')
deleteProperty(authUser, 'name')

// 단축 프로퍼티
let name = '선범'
let email = 'seonbeom2@euid.dev'
let authorization = 'Lv. 99'
let isLogin = true

const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin,
}

// shorthand property
const student2 = {
  name,
  email,
  authorization,
  isLogin,
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 개수가 0이면 false, 아니면 true 반환
// function isEmptyObject(object) {
//   if (Object.keys(object).length) return true
//   return false
// }

function isEmptyObject(object) {
  return getPropertiesList(object).length ? true : false
}

let salaries = {
  John: 100,
  Ann: 160,
  Pate: 430,
}

// 월급의 총 합을 구하시오
/* 구조 분해 할당 destructuring assignments*/
let total = 0
// Object.entries로 가져온 배열도 key가 index고 각 배열이 value이기 때문에 for of를 씀!
for (let [key, value] of Object.entries(salaries)) {
  total += value
}
console.log(total)

/* -------------------------------------------------------------------------- */
/*                                 배열 구조 분해 할당                                */
/* -------------------------------------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff2f']
// const COLOR_RED = color[0]
// const COLOR_BLUE = color[1]
// const COLOR_GREEN = color[2]

// const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color
// 초록만 가져오고 싶을 때
const [, , COLOR_GREEN] = color

/* -------------------------------------------------------------------------- */
/*                                 객체 구조 분해 할당                                */
/* -------------------------------------------------------------------------- */

// salaries 객체 위에 있음
const { John, Ann, Pete } = salaries

console.log(John)
