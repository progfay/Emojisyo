const { send } = require('micro')
const Asearch = require('asearch')
const emojiMap = require('./emojiMap')

const getEmojiList = (word) => {
  const asearch = new Asearch(` ${word} `)
  let list = []

  for (const ambiguity of [0, 1, 2]) {
    for (const keyword of Object.keys(emojiMap)) {
      if (!asearch.match(keyword, ambiguity)) continue
      list = list.concat(emojiMap[keyword])
    }
    if (list.length > 0) break
  }

  return list
}

const getSuggestedList = (input) => {
  if (!input) return []

  let emojiSet = null
  for (const word of input.split(' ')) {
    if (!emojiSet) {
      emojiSet = new Set(getEmojiList(word))
    } else {
      emojiSet = new Set(
        getEmojiList(word).filter(emoji => emojiSet.has(emoji))
      )
    }
  }

  return Array.from(emojiSet)
}

module.exports = ({ query: { input = '' } = {} }, res) => (
  send(res, 200, {
    items: [
      {
        input: input,
        results: getSuggestedList(input)
      }
    ]
  })
)
