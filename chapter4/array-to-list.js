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

function listToArray(list) {
    let array = [];
    while(list){
        array.push(list.value) 
        list = list.next
    }
    return array;
}

function prepend(list, el) {
    list = arrayToList(reverseArrayInPlace(listToArray(list)))
    let lastNode = null
    while(list) {
        let node = {value: list.value, next: lastNode}
        lastNode = node
        list = list.next
    }
    let node = { value: el.value, next: lastNode}
    return node
}

function getNth(list, nth) {
    for(i = 0; i != nth && list; i++) {
        list = list.next
    }
    return list ? list.value : undefined
}

function getNthRecursive(list, nth) {
    if (nth != 0 && list)
        return getNthRecursive(list.next, nth - 1)
    else if (list)
        return list.value
    else
        return undefined
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
///console.log(util.inspect(prepend(arrayToList([1,2,3,4,5,6,7,8,9,10]), {value: 6, next: null}), {showHidden: false, depth: null}));
//console.log(getNth(arrayToList([1,2,3,4,5,6,7,8,9,10]), -1))
//console.log(getNthRecursive(arrayToList([1,2,3,4,5,6,7,8,9,10]), -1))
