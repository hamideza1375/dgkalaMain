
export default function clipboard(text) {
  return navigator.clipboard.writeText(text)
}