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

// let span = document.querySelectorAll('span')

// first, second 분리하기 ( 구조분해 할당 이용 )
// let [first, second] = document.querySelectorAll('span')
// console.log(second)

console.log(getNode('.first'))

/* 문서 대상 확인 */
// - matches
// 선택자 안에 class 또는 id를 가지고 있는 대상이 있어?
console.log(getNode('.first').matches('.first'))

// - contains
// 선택자의 자식들 중에 해당 element가 있어?
console.log(getNode('h1').contains(getNode('.first')))

let first = getNode('.first')

// 클릭이벤트로 응용해보기
let clicked = false
document.addEventListener('click', () => {
  if (first.classList.contains('first') && !clicked) {
    first.classList.add('is-active')
  } else {
    first.classList.remove('is-active')
  }

  clicked = !clicked
})
