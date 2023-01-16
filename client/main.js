import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  invisibleElement,
  visibleElement,
  insertLast,
  attr,
  clearContents,
} from './lib/index.js'

/* 
  [주사위 굴리기]
  1. dice 애니메이션 불러오기
  2. bindEvent 유틸함수 만들기
  3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
  4. 변수 보호를 위한 클로저 + IIFE 사용하기 
*/

/* 
  [ 레코드 리스트 보이기 ]
  1. handleRecord 함수를 만들기
  2. disable 활성 유틸 함수 만들기
  3. handleReset 함수를 만듭니다.
  4. visible 활성 유틸 함수 만들기
  5. toggleState 유틸 함수 만들기  
*/

/* 
  [ 레코드 템플릿 뿌리기 ]
  1. renderRecordListItem 함수 만들기
  2. HTML 템플릿 만들기
  3. 템플릿 뿌리기 
 */
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button',
)
const recordListWrapper = getNode('.recordListWrapper')
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')
// const recordButton = getNode('.buttonGroup > button:nth-child(2)')
// const resetButton = getNode('.buttonGroup > button:nth-child(3)')

let count = 0
let total = 0

function renderRecordListItem() {
  const diceValue = +attr('#cube', 'data-dice')
  const template = /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${diceValue}</td>
    <td>${(total += diceValue)}</td>
  </tr>
  `
  insertLast('.recordListWrapper tbody', template)
  // 새로운 기록이 생겼을 때 바로 볼 수 있게 스크롤을 맨 밑으로 내려줌
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}

/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */

// IIFE
const handleRollingDice = (() => {
  let stopAnimation // else절에서도 이 변수 쓸 수 있게 전역에 선언
  let isRolling = false

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100)
      // recordButton.disabled = true
      disableElement(recordButton)
      disableElement(resetButton)
    } else {
      clearInterval(stopAnimation)
      // recordButton.disabled = false
      enableElement(recordButton)
      enableElement(resetButton)
    }
    isRolling = !isRolling
  }
})()

const handleRecord = () => {
  visibleElement(recordListWrapper)

  renderRecordListItem()
}

const handleReset = () => {
  invisibleElement(recordListWrapper)
  clearContents()
}

rollingDiceButton.addEventListener('click', handleRollingDice)
recordButton.addEventListener('click', handleRecord)
resetButton.addEventListener('click', handleReset)
