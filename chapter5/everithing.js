let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let every = (array, test) => {
    for (let i = 0; i != array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

console.log(every(array, (val) => val < 11));

let every2 = (array, test) => {
    return array.some(test) === false;  
}

console.log(every2(array, (val) => !(val < 11)));
