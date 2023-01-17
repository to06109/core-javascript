// Ajax Engine

function xhrData({
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

xhrData({
  url: 'https://jsonplaceholder.typicode.com/uses',
  onSuccess: (result) => {
    console.log(result)
  },
  onFail: (error) => {
    console.error(error)
  },
})

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
)
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
