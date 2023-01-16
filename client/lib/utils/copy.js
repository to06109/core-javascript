export function copy(text) {
  return navigator.clipboard.writeText(text) // promise를 반환함
}
