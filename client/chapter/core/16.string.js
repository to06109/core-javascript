/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

// indexOf를 어디에 쓰는가
function checkBrowser(browserName) {
  let browser
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('chrome') >= -1) browser = 'chrome'
  else if (ua.indexOf('edge') >= -1) browser = 'edge'
  else if (ua.indexOf('whale') >= -1) browser = 'whale'
  else if (ua.indexOf('safari') >= -1) browser = 'safari'
  else if (ua.indexOf('firefox') >= -1) browser = 'firefox'

  return browser === browserName
}

// 문자열 자체가 유사배열! (length가짐, iterable한 객체)
let message = 'Less is more.'
console.log(message)

// length 프로퍼티
let stringTotalLength = message.length
console.log('stringTotalLength : ', stringTotalLength)

// 특정 인덱스의 글자 추출 (유사배열이기 때문에)
let extractCharacter = message[0]
console.log('extractCharacter : ', extractCharacter)

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter

// message[3] = 'i'
// 추출해서 넣는건 가능
// message = 'more' + message[5] // 'morei'

// 부분 문자열 추출
let slice = message.slice()
console.log('slice : ', slice) // 'Less is more.'

let slice2 = message.slice(0, 3)
console.log('slice2 : ', slice2) // 'Les'

let slice3 = message.slice(8, -1)
console.log('slice3 : ', slice3) // 'more'

let slice4 = message.slice(8)
console.log('slice4 : ', slice4) // 'more.'

let subString = message.substring(-1, 5)
console.log('subString : ', subString)

let subStr // 없어짐!

// 문자열 포함 여부 확인
let indexOf = message.indexOf('i') // 문자열에 해당 문자가 존재하면 문자 위치 반환, 아니면 -1 반환
console.log('indexOf : ', indexOf) // 5

// 뒤에서부터 찾음 ??????????????뭐여 mdn 문서 보기
let lastIndexOf = message.lastIndexOf('i') // 7
console.log('lastIndexOf : ', lastIndexOf) // 5
let includes = message.includes('Less')
console.log('includes : ', includes)

// 해당 문자로 시작하는지/끝나는지
let startsWith = message.startsWith('L')
console.log('startsWith : ', startsWith)

let endsWith = message.endsWith('.')
console.log('endsWith : ', endsWith)

// 공백 잘라내기
let trimLeft = message.trimLeft()
console.log('trimLeft : ', trimLeft)

let trimRight = message.trimRight()
console.log('trimRight : ', trimRight)

let trim = message.trim()
console.log('trim : ', trim)

// 띄어쓰기까지 없애려면?
let trim2 = message.replace(/\s*/g, '')
console.log('trim2 : ', trim2)

// 텍스트 반복
let repeat = message.repeat(3)
console.log('repeat : ', repeat)

// 대소문자 변환
let toLowerCase = message.toLowerCase()
console.log('toLowerCase : ', toLowerCase)
let toUpperCase = message.toUpperCase()
console.log('toUpperCase : ', toUpperCase)

// 텍스트 이름 변환 유틸리티
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase(),
  )
}

function toPascalCase(string) {
  let name = toCamelCase(string)
  return name[0].toUpperCase() + name.slice(1)
}

toCamelCase('less-is-more') // lessIsMore
toPascalCase('less-is-more') // LessIsMore

// let toCamelCase
// let toPascalCase
