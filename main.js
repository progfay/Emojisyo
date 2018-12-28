const { send } = require('micro')
const { router, get } = require('microrouter')
const handler = require('serve-handler')

const hoge = (req, res) => send(res, 200, 'hoge')
const searchList = (req, res) => send(res, 200, { 'items': [{ 'query': '', 'results': ['Montgomery, Alabama', 'Juneau, Alaska', 'Phoenix, Arizona', 'Little Rock, Arkansas'] }] })
const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/', handler),
  get('/hoge', hoge),
  get('/search_list', searchList),
  get('/*', notfound)
)
