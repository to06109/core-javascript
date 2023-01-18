// Ajax Engine

import { typeError } from '../error/index.js'

/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
  */

// 콜백 방식
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'applicatoin/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest()
  // 비동기 통신 오픈
  xhr.open(method, url)

  // 헤더 추가
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value)
  // })

  // 객체 구조 분해 할당
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr
    if (status >= 200 && status < 400) {
      // 통신 성공 상태일 경우
      if (readyState === 4) {
        console.log('통신 성공')
        onSuccess(JSON.parse(response))
      }
    } else {
      onFail('통신 실패')
    }
  })
  // 서버에 요청
  xhr.send(JSON.stringify(body))
}

// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/uses',
//   onSuccess: (result) => {
//     console.log(result)
//   },
//   onFail: (error) => {
//     console.error(error)
//   },
// })

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({ method: 'POST', body, url, onSuccess, onFail })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({ method: 'PUT', body, url, onSuccess, onFail })
}

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({ url, onSuccess, onFail })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({ method: 'DELETE', url, onSuccess, onFail })
}

/* // 사용예제
xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
)

xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    name: 'Song song',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
)

xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
) */
/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
}) */

// Promise API

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
}

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest()

  // 얕복하고 합성해서 구조분해할당 때림
  const { method, url, body, headers } = Object.assign(
    {},
    defaultOptions,
    options,
  )

  if (!url) typeError('서버와 통신할 url인자는 반드시 필요합니다. ')
  // 얕은 복사라서 header는 참조만함
  // console.log(headers === defaultOptions.headers) // true

  xhr.open(method, url)

  xhr.send(body ? JSON.stringify(body) : null)

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr
      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          console.log('통신 성공')
          resolve(JSON.parse(response))
        }
      } else {
        reject('에러입니다.')
      }
    })
  })
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users/1',
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  })
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    method: 'POST',
    url,
    body,
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    method: 'PUT',
    url,
    body,
  })
}

xhrPromise.delete = (url) => {
  return xhrPromise({
    method: 'DELETE',
    url,
  })
}

// xhrPromise
//   .get('www.naver.com')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
