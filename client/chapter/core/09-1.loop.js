/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0
// while (i < 10) {
//   console.log('안녕')
//   i++
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
]

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0])
// console.log(frontEndDev[1])
// console.log(frontEndDev[2])
// console.log(frontEndDev[3])
// console.log(frontEndDev[4])
// console.log(frontEndDev[5])

let z1 = performance.now()

let i = 0

while (i < frontEndDev.length) {
  let value = frontEndDev[i]
  console.log(value)
  i++
}

let z2 = performance.now()

// // 배열 역순환 출력
// while (i < frontEndDev.length) {
//   let value = frontEndDev[frontEndDev.length - 1 - i]
//   console.log(value)
//   i++
// }

// 배열 역순환 출력2
let copyArray = [...frontEndDev] // 전개연산자 spread operator
while (frontEndDev.length) {
  console.log(copyArray.pop()) // 얘는 배열을 다 파괴함
}

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환
