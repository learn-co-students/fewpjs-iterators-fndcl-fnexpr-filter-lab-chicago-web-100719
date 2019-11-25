// Code your solution here

function findMatching(source, passed) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === passed.toLowerCase()
    )
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, passedName) {
    return source.filter( record => record.name === passedName)
  }