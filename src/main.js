const { router, get } = require('microrouter')
const handler = require('serve-handler')
const suggestedList = require('./suggestedList')

module.exports = router(
  get('/emoji_list', suggestedList),
  get('/*', (req, res) => handler(req, res, { public: 'src/static' }))
)
