function reverseArray(array) {
    let ret = []

    for(i = array.length - 1; i >= 0 ; i --) {
        ret.push(array[i]);
    }

    return ret;
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

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));
