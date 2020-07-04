let array = [1,2,3,4,5,6,7,8,9,10];

let myLoop = (array, test, body, update) => {
    if (!Array.isArray(array)) {
        throw ("Plz provide an array");
    }

    let ret = [];

    for (let i = 0; test(array[i]) ; i++) {
        body(array[i]);
        ret.push(update(array[i]));
    }
    
    return ret;
}

console.log(myLoop(array, (val) => val <= 10, (val) => console.log(val), (val) => val + 5));
