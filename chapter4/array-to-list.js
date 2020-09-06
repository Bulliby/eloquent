const util = require('util')

function arrayToList(array) {
    let lastNode = null
    for (i = array.length -1; i != -1; i--) {
        let node = { value: array[i], next: lastNode }
        lastNode = node
    }

    return lastNode
}

function listToArray(list) {
    let array = [];
    for(;list;list = list.next) {
        array.push(list.value) 
    }

    return array;
}

function prepend(el, list) {
    return { value: el, next: list}
}

function getNth(list, nth) {
    for(i = 0; i != nth && list; i++) {
        list = list.next
    }
    return list ? list.value : undefined
}

function getNthRecursive(list, nth) {
    if (!list) {
        return undefined
    } else if (nth != 0) {
        return getNthRecursive(list.next, nth - 1)
    } else {
        return list.value
    }
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

//console.log(util.inspect(arrayToList([1,2,3,4,5,6,7,8,9,10]), {showHidden: false, depth: null}))
//console.log(listToArray(arrayToList([1,2,3,4,5,6,7,8,9,10])))
//console.log(util.inspect(prepend(-2, prepend(-1, arrayToList([1,2,3,4,5,6,7,8,9,10]))), {showHidden: false, depth: null}));
//console.log(getNth(arrayToList([1,2,3,4,5,6,7,8,9,10]), 0))
//console.log(getNthRecursive(arrayToList([1,2,3,4,5,6,7,8,9,10]), 0))
