/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */
const first = getNode('.first')

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(first.className) // first
console.log(first.classList) // DOMTokenList ['first', value: 'first']
first.classList.add('hello')
// first.classList.remove('hello')
// first.classList.togle('is-active')
first.classList.contains('hello') // true

// 유틸함수 만들기 -> lib/dom/css.js로 이동
addClass('.first', 'hello') // <span class="first hello">hello</span>
removeClass('.first', 'hello') // <span class="first">hello</span>
// removeClass('.first') // <span class>hello</span>
// toggleClass('.first', 'hi')

toggleClass('.first', 'hello2')

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// first.style.transform = 'rotate(360deg)'
first.style.backgroundColor = 'red'

/* 계산된 스타일 읽기 ------------------------------------------------------- */
let size = getComputedStyle(first).fontSize
console.log(size) // 32px
// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// 자바스크립트에선 객체의 key, value값을 변수로 받기 위해서는 . 사용 x
// [ ] 각괄호 표기법

// 정확한 css 속성인지?
// console.log(getCss('.first', 'font-size'))
// setCss('.first', 'color', 'blue')

css('.first', 'font-size', '100px') // set
console.log(css('.first', 'font-size')) // get
