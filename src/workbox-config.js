module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{js,ico,png,html,json}"
  ],
  "swDest": "sw.js",
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
