/* global gsap */

import {
  getNode as $,
  insertLast,
  tiger,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  changeColor,
  delayP,
  attr,
} from './lib/index.js'

/* // 콜백방식 사용해보기
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    console.log(res)
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.')
    console.log(err)
  },
) */

/* // 프라미스방식 사용해보기
xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    insertLast('body', JSON.stringify(res))
  })
  .catch((err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.')
  }) */

// 1. 유저 카드 생성하기
// 2. 생성한 카드를 렌더링

const userCardContainer = $('.user-card-inner')

async function rendingUserList() {
  renderSpinner('.user-card-list')
  try {
    await delayP(2000) // 2초 뒤에 렌더링
    $('.loadingSpinner').remove()
    let response = await tiger.get('https://jsonplaceholder.typicode.com/users')
    let userData = response.data

    console.log(response)
    userData.forEach((data) => renderUserCard(userCardContainer, data))

    // let list = document.querySelectorAll('.user-card') // 얘를 또 배열로 가져와야함
    gsap.to(gsap.utils.toArray('.user-card'), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    })

    changeColor('.user-card')
  } catch (err) {
    renderEmptyCard(userCardContainer)
  }
}

rendingUserList()

// ajax get통신으로 user List를 받아오기

// 이벤트 위임
function handler(e) {
  let deleteButton = e.target.closest('button')
  let article = e.target.closest('article')
  if (!deleteButton || !article) return

  // slice를 준 이유 'user-1' -> '1'
  console.log(+attr(article, 'data-index').slice(5))
}

userCardContainer.addEventListener('click', handler)
