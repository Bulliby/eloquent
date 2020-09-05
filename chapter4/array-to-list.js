const util = require('util')

function arrayToList(array) {
    array = reverseArrayInPlace(array);
    let lastNode = { value: array[0], next: null }
    for (i = 1; i != array.length; i++) {
        let node = { value: array[i], next: lastNode }
        lastNode = node
    }

    return lastNode
}

function reverseArrayInPlace(array) {
    let middle = Math.floor(array.length / 2);
    let bkp;
    for (i = 0; i != middle; i++) {
        bkp = array[i];
        array[i] = array[array.length-1 - i];
        array[array.length-1 - i] = bkp;
    }

    return array;
}

console.log(util.inspect(arrayToList([1,2,3,4,5,6,7,8,9,10]), {showHidden: false, depth: null}))
