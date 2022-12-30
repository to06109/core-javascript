/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

/* age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
"이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다. */
let age = 20
if (14 <= age && age <= 90) {
  console.log('사이 범위 확인!')
}

let a = 10
let b = ''
let value = Boolean(b)

// 논리곱(그리고) 연산자
let AandB = a && b

// 논리합(또는) 연산자
let AorB = a || b

// 부정 연산자
let reverseValue = !value

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// 배열, 객체도 그 자체로 값이기 때문에 비어있어도 true
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false }

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true }

/* 로그인 구현하기 + 대소문자 구분없이 입력 받을 수 있게*/
let userName = prompt("Who's there?", '')
let pw

if (userName?.toUpperCase() === 'ADMIN') {
  pw = prompt('Password?', '').toUpperCase()

  if (pw?.toUpperCase() === 'THEMASTER') alert('환영합니다!')
  else if (pw === '' || pw === null) alert('취소되었습니다.')
  else alert('인증에 실패하였습니다.')
  // 모든 공백을 찾아서 ''로 변환
} else if (userName.replace(/\s*/g, '') === '' || userName === null) {
  alert('취소되었습니다.')
} else {
  alert("I don't know you")
}
