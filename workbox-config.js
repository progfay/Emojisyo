module.exports = {
  "globDirectory": "src/static",
  "globPatterns": [
    "**/*.{js,ico,png,html,json}"
  ],
  "swDest": "src/static/sw.js",
  "runtimeCaching": [{
    urlPattern: new RegExp('^https://cdn.ampproject.org'),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
  }]
};
