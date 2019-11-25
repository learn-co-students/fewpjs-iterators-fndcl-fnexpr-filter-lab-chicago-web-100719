// Code your solution here

function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter( function(driver) {
        return driver.toUpperCase() === string.toUpperCase();
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
    const strLength = string.length;
    const matchingDrivers = drivers.filter(function(driver) {
        let partName = driver.slice(0, strLength);
        return partName.toUpperCase() === string.toUpperCase();
    });
    return matchingDrivers;
}

function matchName(drivers, string) {
    const matchingDrivers = drivers.filter(function(driver) {
        return driver.name.toUpperCase() === string.toUpperCase()
    });
    return matchingDrivers;
}