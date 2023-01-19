const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

export const tiger = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) }, // header 없으면 빈객체로 해라~ 에러 안나게 nullish 처리
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

// console.log(
//   '결과',
//   tiger({ url: 'https://jsonplaceholder.typicode.com/users/1' }),
// )

tiger.get = (url, options) => {
  return tiger({ url, ...options })
}

/**
 * @function tiger
 * @param {string} url
 * @param {object} body
 * @param {{a:number, b:string, c:string}} options
 * @returns {Promise} promise
 */
tiger.post = (url, body, options) => {
  return tiger({ method: 'POST', url, body: JSON.stringify(body), ...options })
}

tiger.put = (url, body, options) => {
  return tiger({ method: 'PUT', url, body: JSON.stringify(body), ...options })
}

tiger.delete = (url, options) => {
  return tiger({ method: 'DELETE', url, ...options })
}

// 사용
// tiger.post('www.naver.com', { name: 'tiger' }, { mode: 'cors', headers: {} })
