// Code your solution here
function findMatching(drivers, string){
    let matching = drivers.filter (name => {
       return name.toLowerCase() === string.toLowerCase()
    })
    return matching
}

function fuzzyMatch(drivers, string){
    let matching = drivers.filter( driver =>{
        return driver.startsWith(string)
    })
    return matching
}

function matchName(drivers, string){
    let matching = drivers.filter(driver => {
        return driver.name === string
    })
    return matching 
}