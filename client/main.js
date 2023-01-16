import { diceAnimation, getNode } from './lib/index.js'

/* 
  [주사위 굴리기]

  1. dice 애니메이션 불러오기
  2. bindEvent 유틸함수 만들기
  3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
  4. 변수 보호를 위한 클로저 + IIFE 사용하기 
*/

const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')

const handlerRollingDice = () => {
  diceAnimation()
}

rollingDiceButton.addEventListener('click', handlerRollingDice)
