// 객체 구조 분해 할당
const {
  localStorage: storage, // localStorage를 storage로 가져오겠다
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis

console.log(localStorage)
