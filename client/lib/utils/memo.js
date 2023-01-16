export const memo = (() => {
  const cache = {}

  return (key, callback) => {
    if (!callback) return cache[key]

    if (cache[key]) {
      console.warn(`${key}값은 이미 캐시된 값이 존재합니다.`)
      return // 아래코드로 캐시되는 것 방지
    }

    cache[key] = callback()
    console.log(cache)
  }
})()

// memo('cube', () => {
//   return document.querySelector('#cube')
// })

// console.log(memo('cube'))

// memo('name', () => 'tiger') // set
// console.log(memo('name')) // get
