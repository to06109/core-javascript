function bindEvent(node, type, handler) {
  if (typeof node === 'string') {
    node = getNode(node)
  }
  // 이벤트 타입 체크
  if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
    typeError(
      'bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.',
    )
  }
  node.addEventListener(type, handler)

  // 함수가 함수를 내뱉는다? 클로저
  // bindEvent 함수를 실행하면 addEventListener를 하고
  // 받은 node, type, handle 환경을 모두 기억하고 있는 이벤트를 지우는 함수를 내뱉는다.
  return () => node.removeEventListener(type, handler)
}
