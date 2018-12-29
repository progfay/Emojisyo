const { send } = require('micro')

const suggested = (input) => {
  if (!input) {
    return []
  }
  return ['hoge']
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
