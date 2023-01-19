/* global gsap */

import {
  getNode,
  insertLast,
  tiger,
  renderUserCard,
  renderSpinner,
  changeColor,
  delayP,
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

const userCardContainer = getNode('.user-card-inner')

async function rendingUserList() {
  renderSpinner('.user-card-list')
  try {
    await delayP(2000) // 2초 뒤에 렌더링
    getNode('.loadingSpinner').remove()
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
    console.log(err)
  }
}

// ajax get통신으로 user List를 받아오기

rendingUserList()
