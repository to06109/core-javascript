/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first')

function handler() {
  console.log('hit ! ')
  // const second = getNode('.second')
  // css(second, 'display', 'none')
  // second.style.display = "none"; // 이렇게 해도 됨
}

first.addEventListener('click', handler)

const second = getNode('.second')
second.addEventListener('click', function () {
  first.removeEventListener('click', handler)
})

// - addEventListener
// - removeEventListener


// bindEvent 유틸 함수 만들기(클로저 이용)
// const off = bindEvent('.first', 'click', handler)

// off 하나로 이벤트 지우는 함수 넣어줄 수 있음
// bindEvent('.second', 'click', off)

