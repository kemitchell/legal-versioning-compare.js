const parse = require('legal-versioning-parse')

module.exports = (firstString, secondString) => {
  if (firstString === secondString) return 0
  const first = parse(firstString)
  const second = parse(secondString)
  for (const component of ['edition', 'update', 'correction']) {
    const firstValue = first[component]
    const secondValue = second[component]
    if (firstValue > secondValue) return 1
    if (firstValue < secondValue) return -1
  }
  const firstDraft = first.draft
  const secondDraft = second.draft
  if (firstDraft && !secondDraft) return -1
  if (!firstDraft && secondDraft) return 1
  if (firstDraft > secondDraft) return 1
  return -1
}
