const { send } = require('micro')
const emojiMap = require('./emojiMap')

const suggested = (input) => {
  if (!input) {
    return []
  }
  return emojiMap[input] || []
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
