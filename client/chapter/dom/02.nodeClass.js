/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* 노드 정보 ------------------------------------------------------------- */
let first = getNode('.first')
console.log(first) // <span class="first">hello</span>

// - nodeType
console.log(first.nodeType) // 1
console.log(first.nodeType === document.ELEMENT_NODE) // true
console.log(first.nodeType === 1) // true / 암묵적으로 1로 쓰는 경우도 있음

// - nodeName (vs. tagName)
console.log(first.nodeName) // SPAN
console.log(first.tagName) // SPAN
console.log(first.nodeName === 'SPAN') // true

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// += 했을 때 뒤에만 붙일 수 있음
first.innerHTML = 'like lion' // Hello 사라지고 like lion 들어감
first.innerHTML = '<em>like lion</em>' // Hello 사라지고 like lion 들어감

// * 기존 내용 삭제
first.innerHTML += ''

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += 'like lion' // Hello like lion 들어감

// - textContent
console.log(first.textContent) // like lionlike lion -> get
// * 요소 내의 텍스트에 접근
first.textContent = '멋쟁이 사자처럼' // 멋쟁이 사자처럼 들어감 -> set
// * 태그는 제외하고 오로지 텍스트만 추출

/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

getNode('h1').hidden = true // 멋쟁이 사자처럼 사라짐
getNode('h1').hidden = false // 멋쟁이 사자처럼 다시 생김

// hidden을 이용해 글자 깜빡깜빡
// getNode('h1').hidden = true

// let toggle = false

// setInterval(() => {
//   getNode('h1').hidden = toggle ? false : true
//   toggle = !toggle
// }, 100)
