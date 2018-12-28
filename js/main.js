const { send } = require('micro')
const { router, get } = require('microrouter')
const handler = require('serve-handler')
const suggestedList = require('./suggestedList')

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/', handler),
  get('/search_list', suggestedList),
  get('/*', notfound)
)
