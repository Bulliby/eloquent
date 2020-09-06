function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        obj1 === null ||
        obj2 === null ||
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object'
    ) return false;

    let obj1Keys = Object.keys(obj1), obj2Keys = Object.keys(obj2);

    for(key of obj1Keys) {
        if (!obj2[key] || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

obj1 = {toto: "toto", tutu: "tutu"}
obj2 = {toto: "toto", tutu: "tutu"}

console.log(deepEqual(obj1, obj2)); //true

obj1 = {toto: "tota", tutu: "tutu"}
obj2 = {toto: "toto", tutu: "tutu"}

console.log(deepEqual(obj1, obj2)); //false

obj1 = {toto: "toto"}
obj2 = {toto: "toto", toto: "toto"}

console.log(deepEqual(obj1, obj2)); //true

console.log(deepEqual(obj1, null)); //false
console.log(deepEqual([1,2,3], [1,2,3])); //true
console.log(deepEqual([1,2,4], [1,2,3])); //false
