const { send } = require('micro')
const Asearch = require('asearch')
const { lib } = require('emojilib')
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
    emojiSet = emojiSet
      ? new Set(getEmojiList(word).filter(emoji => emojiSet.has(emoji)))
      : new Set(getEmojiList(word))
  }

  return Array.from(emojiSet)
}

module.exports = ({ query: { input } }, res) => {
  const results = getSuggestedList(input).map(
    keyword => ({
      emoji: lib[keyword].char,
      name: keyword
    })
  )
  return send(res, 200, { items: [ { input, results } ] })
}
