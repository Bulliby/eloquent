let SCRIPTS = require('./scripts.js');

let string = "Hello !"

function inScript(code, script) {
    return script.ranges.some(([from, to]) => {
        return code >= from && code < to;
    });
}

function iterString(string) {
    for(let i = 0; i != string.length; i++) {
        countInString(string.codePointAt(i));
    }
}

let countInString = function(index) {
    SCRIPTS.forEach((script) => {
        if(inScript(index, script)) {
            createOrAdd(script.name);
        }
    });
}

function createOrAdd(name)
{
    if (findItemByName(name).length == 0) {
        stats.push({name, count : 1});
    } else {
        let test = findItemByName(name); 
        test.count =+ 1
    }
}

function findItemByName(name) 
{
    return stats.filter((el) => {
        return el.name == name;
    });
}

let stats = [];
iterString(string);
console.log(stats);
