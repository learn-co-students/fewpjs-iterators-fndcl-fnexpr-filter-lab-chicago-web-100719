function findMatching(drivers, string) {
    let matches = drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
    return matches
} 

function fuzzyMatch(drivers, string) {
    let fuzzymatches = drivers.filter(d => {return d.startsWith(string)})
    return fuzzymatches
}

function matchName(drivers, string) {
    let nameMatch = drivers.filter(d => {return d.name ===string})
    return nameMatch
}