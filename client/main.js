/* eslint no-undef: 'warn' */
/* eslint no-unused-vars: 'off' */

// 1. 인풋 밸류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면에 출력하기

const form = getNode('.calculator')

const done = getNode('#done')
const firstInput = getNode('#firstNumber')
const secondInput = getNode('#secondNumber')
const result = getNode('.result')

// 재사용성을 위해 이 함수에서 형변환은 하지 않음
// 숫자 뿐 아니라 문자로 받아야할 수도 있기 때문에
function getInputValue(node) {
  if (typeof node === 'string') node = getNode(node)
  // 태그가 input 태그가 아닌 경우 에러
  if (node.tagName !== 'INPUT')
    refError('getInputValue 함수는 INOUT ELEMENT만 허용합니다.')
  return node.value
}

const sum = (valueA, valueB) => valueA + valueB

function clearContents(node) {
  if (typeof node === 'string') node = getNode(node)
  node.textContent = ''
}

function handler(e) {
  // 브라우저 새로고침 기본동작 제거
  e.preventDefault()
  let firstValue = +getInputValue(firstInput)
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue, secondValue)

  // innetHTML은 사이트 간 스크립팅 공격을 보호해주지 않음
  clearContents(result)
  insertLast(result, total)
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput)
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue, secondValue)

  clearContents(result)

  insertLast(result, total)
}

done.addEventListener('click', handler)

firstInput.addEventListener('change', inputHandler)
secondInput.addEventListener('change', inputHandler)
