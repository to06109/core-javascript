/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000]
console.log(typeof arr) // object
console.log(Array.isArray(arr)) // true
Object.prototype.toString.call([]) // '[object Array]'
Object.prototype.toString.call([]).slice(8, -1) // Array

// null 체크
console.log(typeof null) // object (언어상의 오류)
Object.prototype.toString.call(null) // '[object Null]'
Object.prototype.toString.call(null).slice(8, -1).toLowerCase() // 'null'

// 유틸함수 만들기
function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  )
}

function isNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  )
}

console.log('isArray : ', isArray([])) // true
console.log('isNull : ', isNull(null)) // true
console.log(Object.prototype.toString([1, 2, 3]))

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

// forEach에 this를 전달해줄 수 있음
arr.forEach((item, index) => {
  this[item] = item
}, user)
console.log(user) // {} -> 화살표 함수이기 때문에 아무일도 일어나지 않음

arr.forEach(function (item, index) {
  this[item] = item
}, user)
console.log(user) // {10: 10, 100: 100, 1000: 1000, 10000: 10000}

const span = document.querySelectorAll('span')

// 여러 노드에 한번에 이벤트 추가할 때
// 유사배열이지만 forEach 내장되어 있음
span.forEach((item) => {
  item.addEventListener('click', function () {
    console.log(this)
  })
})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()

// splice
arr.splice(1, 0, 23, 5)
console.log(arr) // [10, 23, 5, 100, 1000, 10000]

// sort

// 반환 값 < 0 : a가 b보다 잎에 있어야 한다.
// 반환 값 = 0 : a와 b의 숫서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 잎에 있어야 한다.

arr.sort((a, b) => a - b)
console.log(arr) // [5, 10, 23, 100, 1000, 10000]

/* 새로운 배열 반환 --------------------------------------------------------- */
// concat
// slice
// map
// let todo = ['밥먹기', '미용실가기', '코딩공부하기']
todo.map((item, index) => {
  console.log(item)
})

let newArray = arr.map((item) => item * 2)
console.log(newArray) // [10, 20, 46, 200, 2000, 20000]

// map 응용--------------
let template = todo.map((todoList) => {
  return /* html */ `<li>${todoList}</li>`
})

template.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item)
})
console.log(template) // ['<li>밥먹기</li>', '<li>미용실가기</li>', '<li>코딩공부하기</li>']
// map 응용 끝------------

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// arr : [5, 10, 23, 100, 1000, 10000]
console.log(arr.indexOf(5)) // 0

// lastIndexOf
// includes
console.log(arr.includes(10)) // true

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  { id: 1, name: '로운' },
  { id: 2, name: '승택' },
  { id: 3, name: '연주' },
]

// find
// id값이 3인 애만 반환
const find = users.find((item, index) => {
  return item.id === 3
})
console.log(find) // {id: 3, name: '연주'}

// 참이면 그거 하나를 반환함
const find2 = users.find((item, index) => {
  return item.id < 5
})
console.log(find2) // {id: 1, name: '로운'}

// findIndex
const findindex = users.findIndex((item) => {
  return item.id === 3
})
console.log(findindex) // 2

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
// 참인 값이 여러개면 다 찾아서 배열로 반환함
let result = arr.filter((number) => {
  return number > 100
})
console.log(result) // [1000, 10000]

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬저',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표 살인마',
  },
]

// reduce
// 친구들 나이의 총 합을 구하시오
let age = friends.reduce((acc, cur, index) => {
  return acc + cur.age
}, 0)
console.log(age) // 72

let todo = ['밥먹기', '미용실가기', '코딩공부하기']
let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`
}, '')
console.log(template2) // <li>할일1 : 밥먹기</li><li>할일2 : 미용실가기</li><li>할일3 : 코딩공부하기</li>

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
let str = '성찬 보경 일범 세민 형진 주현'

// split : 문자 -> 배열
let nameArray = str.split(' ')
console.log(nameArray) // ['성찬', '보경', '일범', '세민', '형진', '주현']

// join : 배열 -> 문자
let nameStr = nameArray.join(' / ')
console.log(nameStr) // '성찬 / 보경 / 일범 / 세민 / 형진 / 주현'
