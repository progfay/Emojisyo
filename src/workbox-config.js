module.exports = {
  "globDirectory": "./static",
  "globPatterns": [
    "**/*.{js,ico,png,html,json}"
  ],
  "swDest": "./static/sw.js",
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
