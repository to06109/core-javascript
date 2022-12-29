/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// String() 함수 이용
// number -> '2022'
const YEAR = 2022
console.log(typeof String(YEAR))

// undefined -> 'undefined'
// null -> 'null'
console.log(typeof String(undefined))
console.log(typeof String(null))

// boolean -> 'true' or 'false'
console.log(typeof String(true))
console.log(typeof String(false))

// String함수로 형변환 하지 않아도 문자열로 바꿀 수 있음
console.log(typeof (true + ''))

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined)) // NaN

// null
console.log(Number(null)) // 0

// boolean
console.log(Number(true)) // 1
console.log(Number(false)) // 0
// Number 함수 없이 형변환
console.log(true * 1) // 1
console.log(true / 1) // 1
console.log(false / 1) // 0
console.log(+false) // 0

// string 숫자형 문자
let num = '   123' // 숫자형 문자인 경우, 공백을 제거하고 숫자로 반환
console.log(num * 1) // 123
console.log(Number('')) // 0
console.log(Number('aa')) // NaN

// numeric string
let width = '320px'
console.log(parseInt(width, 10)) // 320. 문자열에서 정수만 쏙 빼줌

width = '320.123456789px'
console.log(parseFloat(width, 10)) //320.123456789. 소수점까지 빼줌

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(0)) //false
console.log(Boolean('')) //false
console.log(Boolean(' ')) //true
// Boolean 함수 없이 형변환
console.log(!!null) //false

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // -4
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // undefined
" \t \n" - 2 // -2