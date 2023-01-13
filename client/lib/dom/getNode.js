// 유틸함수 만들기 getNode에 대상 넣으면 DOM에서 찾아서 return 해주는 함수
function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }

  return document.querySelector(node)
}

function getNodes(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }

  return document.querySelectorAll(node)
}
