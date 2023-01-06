/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector('.first')

let span = document.querySelectorAll('span')

// first, second 분리하기 ( 구조분해 할당 이용 )
let [first, second] = document.querySelectorAll('span')
// console.log(second)

// 유틸함수 만들기 getNode에 대상 넣으면 DOM에서 찾아서 return 해주는 함수
function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }

  return document.querySelector(node)
}

function getNodes(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }

  return document.querySelectorAll(node)
}

console.log(getNode('.first'))
console.log(getNode(123))

/* 문서 대상 확인 */
// - matches
// - contains
