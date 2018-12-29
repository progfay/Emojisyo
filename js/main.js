const { send } = require('micro')
const { router, get } = require('microrouter')
const handler = require('serve-handler')
const suggestedList = require('./suggestedList')

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/search_list', suggestedList),
  get('/*', (req, res) => handler(req, res, {
    unListed: [ 'node_modules', 'package.json', 'package-lock.json' ]
  }))
)
