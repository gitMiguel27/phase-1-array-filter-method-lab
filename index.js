// Code your solution here
function findMatching(array, string) {
    const drivers = array.filter(function(str) {
        return str === string || str === string.toLowerCase() || str === string.toUpperCase();
    })
    return drivers;
}

function fuzzyMatch(array, string) {
    const drivers = array.filter(function(str) {
        return str.substr(0,2) === string;
    })
    return drivers;
}

function matchName(arrayofObj, string) {
    const drivers = arrayofObj.filter(function(element) {
        return element.name === string;
    })
    return drivers;
}