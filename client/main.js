/* global gsap */

import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showAlert,
  copy,
  addClass,
  removeClass,
} from './lib/index.js'

import { jujeobData } from './data/data.js'

// id는 모듈과 상관없이 콘솔에서 잡힌다.
const submit = getNode('#submit')
const result = getNode('.result')

function clickSubmitHandler(e) {
  e.preventDefault()

  let name = getInputValue('#nameField')
  let list = jujeobData(name)
  let pick = list[getRandom(list.length - 1)]

  // 이름 입력 없을 경우 에러처리
  if (!name) {
    showAlert('.alert-error', '잘못된 정보입니다!', 2000)

    //GSAP
    gsap.fromTo(result, 0.01, { x: -5 }, { x: 5, clearProps: 'x', repeat: 20 })

    // addClass(result, 'shake')
    // setTimeout(() => {
    //   removeClass(result, 'shake')
    // }, 1000)
    return
  }

  if (isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요', 2000)
    return
  }

  clearContents(result) // result 텍스트 비우고
  insertLast(result, pick) // pick 집어넣기
}

function clickCopyHandler(e) {
  let text = result.textContent
  // navigator.clipboard.writeText(text) // writeText: 받은 문자를 클릭보드에 써주는
  // 유틸함수 만들어서 씀
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사가 완료되었습니다.', 2000)
  })
}

submit.addEventListener('click', clickSubmitHandler)
result.addEventListener('click', clickCopyHandler)
