const { send } = require('micro')

module.exports = (req, res) => (
  send(res, 200, {
    items: [
      {
        query: '',
        results: [
          'Montgomery, Alabama',
          'Juneau, Alaska',
          'Phoenix, Arizona',
          'Little Rock, Arkansas'
        ]
      }
    ]
  })
)
