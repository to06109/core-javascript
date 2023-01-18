const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-reffere',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

const tiger = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  }

  let response = await fetch(url, restOptions)

  if (response.ok) {
    // response.json(): response 안에 있는 json()값을 가져오겠다.
    // console.log(response.json()) // result가 받은 data 객체인 프라미스
    // 이러면 result인 data를 await로 뽑아서 response에 data라는 키값으로 프로퍼티 추기
    response.data = await response.json()
  }
  return response
}

console.log('결과', tiger())
