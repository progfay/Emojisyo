const { send } = require('micro')
const Asearch = require('asearch')
const emojiMap = require('./emojiMap')

const suggested = (input) => {
  if (!input) return []

  let emojiList = []
  const asearch = new Asearch(` ${input} `)
  for (const ambiguity of [0, 1, 2]) {
    for (const keyword of Object.keys(emojiMap)) {
      if (!asearch.match(keyword, ambiguity)) continue
      emojiList = emojiList.concat(emojiMap[keyword])
    }
    if (emojiList.length > 0) break
  }

  return Array.from(new Set(emojiList))
}

module.exports = ({ query: { input = '' } = {} }, res) => (
  send(res, 200, {
    items: [
      {
        input: input,
        results: suggested(input)
      }
    ]
  })
)
