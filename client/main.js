import {
  getNode,
  saveStorage,
  deleteStorage,
  loadStorage,
} from './lib/index.js'

const textField = getNode('#textField')
const deleteButton = getNode('input[value="삭제"]')

// 로컬 스토리지에 저장된 값 input에 불러오기
loadStorage('area').then((res) => {
  textField.value = res
})

function inputHandler() {
  saveStorage('area', textField.value)
}

function deleteHandler() {
  deleteStorage('area')
}

// input 안에 내용이 변하는 걸 감시
textField.addEventListener('input', inputHandler)
deleteButton.addEventListener('click', deleteHandler)
