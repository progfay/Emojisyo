const { ordered, lib } = require('emojilib')

const emojiMap = {}

for (const name of ordered) {
  if (!emojiMap[name]) {
    emojiMap[name] = new Set([ name ])
  } else {
    emojiMap[name].add(name)
  }

  const { char, keywords, category } = lib[name]

  if (!emojiMap[char]) {
    emojiMap[char] = new Set([ name ])
  } else {
    emojiMap[char].add(name)
  }

  for (const keyword of keywords) {
    if (!emojiMap[keyword]) {
      emojiMap[keyword] = new Set([ name ])
    } else {
      emojiMap[keyword].add(name)
    }
  }

  if (!emojiMap[category]) {
    emojiMap[category] = new Set([ name ])
  } else {
    emojiMap[category].add(name)
  }
}

for (const keyword in emojiMap) {
  emojiMap[keyword] = Array.from(emojiMap[keyword])
}

module.exports = emojiMap
