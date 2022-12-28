/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

let admin
let name

name = 'John'
admin = name

console.log(admin)

let ourPlanetName = 'Earth'
let currentUserName = 'John'

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */
// 변수, 상수, 찐상수 고민하기

// - 갯수 별 상품 가격 계산하기
let calcProductQuantity

// - 구매 제품 가격의 총 합
let totalProductPrice

// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365

// - 구매 결제 여부
let isPayment = false
let hasClassName = true // 가지고 있냐 없냐

// - 구매 결제 내역
let paymentHistory

// - 브랜드 접두사
const BRAND_PREFIX = 'EUID'

// - 오늘의 운세
let fortuneOfToday

// - 상품 정보
const productInfo = 'galaxy s22' // 정해서 보여줄 때
// let productInfo; // 정보를 받아와서 보여줄 때

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// ajax 통신 상태
/* panding 아무것도 안함
loading 로딩중, 요청 대기
fulfilled, resolved 응답 성공
rejected 실패 */

const PANDING = 'api/panding'
const LOADING = 'api/loading'
const RESOLVED = 'api/resolved'
const REJECTED = 'api/rejected'

/* --------------------------------------------------------------------- */
/* Lexical Environment -------------------------------------------------- */
/* --------------------------------------------------------------------- */

// 언어로 표현할 수 있는 환경
var nickName = 'tiger' // window에 들어감
let nickName2 = 'tiger' // let이 Temporal Dead Zone (임시 사망 지역)으로 보내져서 전역객체에 들어가지 못한다- 라고 설명함
