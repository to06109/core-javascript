import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showAlert,
} from './lib/index.js'

import { jujeobData } from './data/data.js'

// id는 모듈과 상관없이 콘솔에서 잡힌다.
const submit = getNode('#submit')
const result = getNode('.result')

function clickSubmitHandler(e) {
  e.preventDefault()

  let name = getInputValue('#nameField')

  // 이름 입력 없을 경우 에러처리
  if (!name) {
    showAlert('.alert-error', '이름을 입력해 주세요', 2000)
    return
  }

  if (isNumericString(name)) {
    showAlert('.alert-error', '제대로된 이름을 입력해 주세요', 2000)
    return
  }

  let list = jujeobData(name)
  let pick = list[getRandom(list.length - 1)]

  clearContents(result) // result 텍스트 비우고
  insertLast(result, pick) // pick 집어넣기
}

submit.addEventListener('click', clickSubmitHandler)
