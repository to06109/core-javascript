/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const visual = getNode('.visual')
const news = getNode('.news')
const desc = getNode('.desc')

visual.addEventListener('click', (e) => {
  let elem = e.currentTarget
  // console.log(e)
  // console.log('target : ', e.target) // 내가 찍은 애
  // console.log('currentTarget : ', e.currentTarget) // 이벤트 걸어준 애 : visual
  // console.log('this : ', this)
  // 콘솔 창에도 css로 색깔주기
  console.log('%c visual', 'background:dodgerblue;color:white')
  css('.pop', 'display', 'block')
})

getNode('.pop').addEventListener('click', () => {
  e.stopPropagation()
  css('.pop', 'display', 'none')
})

// news.addEventListener('click', function () {
//   // 콘솔 창에도 css로 색깔주기
//   console.log('%c news', 'background:orange;color:white')
// })

// desc.addEventListener('click', function (e) {
//   e.stopPropagation()
//   // 콘솔 창에도 css로 색깔주기
//   console.log('%c desc', 'background:hotpink;color:white')
// })

/* 캡처링 ----------------------------------------------------------------- */
