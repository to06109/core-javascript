import { getNode } from '../dom/getNode.js'

const first = getNode('.first')
const second = getNode('.second')

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout)
}

// 이 콜백지옥을 delayP를 이용해서 아래와 같이 탈출할 수 있다.
// delay(() => {
//   first.style.top = '-100px'
//   delay(() => {
//     first.style.transform = 'rotate(360deg)'
//     delay(() => {
//       first.style.top = '0px'
//     })
//   })
// })

// delayP()
//   .then(() => {
//     // 그리고 나서
//     first.style.top = '-100px'
//     return delayP()
//   })
//   .then(() => {
//     first.style.transform = 'rotate(360deg)'
//     second.style.left = '100px'
//     return delayP()
//   })
//   .then(() => {
//     first.style.top = '0px'
//     second.style.left = '0px'
//   })

function delayP(
  shouldReject = false,
  timeout = 1000,
  data = '성공했습니다.',
  errorMessage = '알 수 없는 오류가 발생했습니다.',
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage)
    }, timeout)
  })
}

console.log(delayP(true, 1000, '진짜 성공', '오류가 발생했다!'))
delayP(true, 1000, '진짜 성공', '오류가 발생했다!').then((res) => {
  console.log(res) // 진짜 성공
})

// console.log(delayP())

// promise value값 가져오기
// delayP()
//   .then((res) => {
//     console.log(res) // 성공!
//   })
//   .catch((err) => {
//     console.log(err)
//   })
