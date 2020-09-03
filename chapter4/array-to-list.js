const util = require('util')

function arrayToList(array) {
    let last = null;
    array = reverseArrayInPlace(array);
    for (i = 0; i != array.length; i++) {
        if (last == null) {
            let node = {
                value: array[i],
                next: null
            }
            last = node
        } else {
            let node = {
                value: array[i],
                next: last
            }
            last = node
        }
    }
    console.log(util.inspect(last, {showHidden: false, depth: null}))
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

arrayToList([1,2,3,4,5,6,7,8,9,10]);
