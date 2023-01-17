import { insertLast, xhrData } from './lib/index.js'

xhrData.get(
  'https://jsonplaceholder.typicode.com/uses/1',
  (res) => {
    console.log(res)
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.')
    console.log(err)
  },
)
