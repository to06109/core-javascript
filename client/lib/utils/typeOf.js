// 숫자형 문자가 맞아?
export function isNumericString(data) {
  data = Number(data)
  return !isNaN(data)
}
