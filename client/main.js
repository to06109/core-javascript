import { insertLast, xhrData, xhrPromise } from './lib/index.js'

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

// 프라미스방식 사용해보기
xhrPromise
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    insertLast('body', JSON.stringify(res))
  })
  .catch((err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.')
  })
