/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* 문: 값을 반환 X / 식: 값을 반환 O

if문 if... { // scope}
for문 for... {}
while문 while... {}
dowhile문

함수선언 문 // 얘는 값을 반환하긴 함

// let result = condition ? value1 : value2 // 삼항연산 식
// let result = value1 || value2
// let result = value1 && value2
 */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100)
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700)
console.log('총 합 = ', 3800 + 15200 - 500 + 80200)
console.log('총 합 = ', 560 + 5000 + 27100 + 10200)
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900)

// 함수 default 값

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0
}

function calcPrice( // 함수 선언
  price1 = 0, // 매개 변수
  price2 = 0,
  price3 = 0,
  price4 = getRandomValue(), // default값으로 함수도 넣을 수 있음
) {
  // validation
  // if (!price1) price1 = 0
  // if (!price2) price2 = 0
  // if (!price3) price3 = 0
  // if (!price4) price4 =

  // 에러처리
  if (!price1 || !price2) {
    throw new Error('calcPrice 함수의 첫 번째 인수는 필수 입력값입니다.')
  }

  return price1 + price2 + price3 + price4 // 함수 값 반환
}

// let result = calcPrice() // 함수 호출
// console.log(result)

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성

// 1. 하나의 기능만을 수행해야 한다. (관심사의 분리)
// 2. 읽었을 때 바로 기능을 알 수 있게씀, (이름과 매개변수의 이름을 직관적으로 적어야 한다. )
// 3. 재사용성이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string; // typeScript 문법

// 내가 짠 코드
// function rem(pxValue, base = 16) {
//   if (typeof pxValue === 'string') {
//     pxValue = parseInt(pxValue)
//   }
//   return pxValue / base + 'rem'
// }

// 범쌤이 짠 코드
function rem(pxValue, base) {
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10))
  // if (typeof pxValue === 'string') {
  //   pxValue = parseInt(pxValue, 10)
  // }

  typeof base === 'string' && (base = parseInt(base, 10))
  // if (typeof base === 'string') {
  //   base = parseInt(base)
  // }

  return `${pxValue / base}rem`
}

// TDD(테스트 주도 개발)
console.assert(rem(20) === '1.25rem')
console.assert(rem('30px') === '1.875rem')
console.assert(rem('56px', 10) === '5.6rem')
console.assert(rem('20px', '10px') === '2rem')

/* 함수를 만드는 과정
  1. function name
  2. validation
  3. return value
  4. parameter, argument
  5. test [Test Driven Development]
*/

// css(node: string, prop: string, value: number|strung) : string;
let css

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
