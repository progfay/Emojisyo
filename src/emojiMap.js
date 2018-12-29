const { ordered, lib } = require('emojilib')

const emojiMap = {}

for (const name of ordered) {
  if (!emojiMap[name]) {
    emojiMap[name] = [ name ]
  } else {
    emojiMap[name].push(name)
  }

  const { char, keywords, category } = lib[name]

  if (!emojiMap[char]) {
    emojiMap[char] = [ name ]
  } else {
    emojiMap[char].push(name)
  }

  for (const keyword of keywords) {
    if (!emojiMap[keyword]) {
      emojiMap[keyword] = [ name ]
    } else {
      emojiMap[keyword].push(name)
    }
  }

  if (!emojiMap[category]) {
    emojiMap[category] = [ name ]
  } else {
    emojiMap[category].push(name)
  }
}

for (const keyword of Object.keys(emojiMap)) {
  emojiMap[keyword] = Array.from(new Set(emojiMap[keyword]))
}

module.exports = emojiMap
