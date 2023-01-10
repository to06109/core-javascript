/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode('.first')
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute('class')) // true

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class')) // first
console.log(first.getAttribute('class') === 'first') // true

// - elementNode.setAttribute(name, value) – 속성값을 변경함
console.log(first.setAttribute('id', 'box')) // 표준속성
console.log(first.setAttribute('some', 'hello')) // 비표준속성 ->이렇게 아무렇게나 선언 X data를 이용하라.

// - elementNode.removeAttribute(name) – 속성값을 지움
// first.removeAttribute('some')

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
// Symbol(Symbol.iterator): ƒ values() -> 넌 순환이 가능한 몸이야~
console.log(first.attributes)

for (let value of first.attributes) {
  console.log(value)
}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset
first.dataset.play = 'playing' // set

console.log(first.dataset.play)

//   (function ($) {
//     let first = $('.first')
//   },
// )(getNode)

// 유틸함수
// get함수 만들기
function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node)
  }
  return node.getAttribute(prop)
}

// set함수 만들기
function setAttr(node, prop, value) {
  // validation: 확인
  if (typeof node === 'string') node = getNode(node)
  if (typeof prop !== 'string')
    throw new TypeError(
      'setAttr  함수의 두 번쨰 인자의 타입은 문자열이어야 합니다.',
    )
  if (!value)
    throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop, value)
}

// common 함수 만들기
console.log(getAttr('.first', 'class')) // first
console.log(getAttr('.first', 'data-play')) // playing

console.log(setAttr('.first', 'data-value', 'hello'))
console.log(first)
console.log(setAttr('.first', 123, 'hello'))
// <span class="first" id="box" some="hello" data-play="playing" data-value="hello">hello</span>
