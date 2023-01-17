// Ajax Engine

function xhrData(method, url) {
  const xhr = new XMLHttpRequest()
  // 비동기 통신 오픈
  xhr.open(method, url)

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      // 통신 성공 상태일 경우
      if (xhr.readyState === 4) {
        console.log('통신 성공')
      }
    } else {
      console.error('통신 실패')
    }
  })
  // 서버에 요청
  xhr.send()
}

xhrData('GET', 'http://www.naver.com')
