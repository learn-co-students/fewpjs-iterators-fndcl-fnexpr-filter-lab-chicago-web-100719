// Code your solution here


function findMatching(nameArr, matcher) {
  return nameArr.filter(name => name.toLowerCase() === matcher.toLowerCase())
}

function fuzzyMatch(nameArr, matcher) {
  return nameArr.filter(name => name[0].toLowerCase() === matcher[0].toLowerCase())
}

function matchName(nameArr, matcher) {
  return nameArr.filter(nameObj => nameObj.name === matcher)
}
