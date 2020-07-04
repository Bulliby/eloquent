let SCRIPTS = require('./scripts.js');

let string = "Hello !"

function inScript(code, script) {
    return script.ranges.some(([from, to]) => {
        return code >= from && code < to;
    });
}

function iterString(string) {
    for(let i = 0; i != string.length; i++) {
        iterScript(i);
    }
}

let iterScript = function(index) {
    let stats = {};
    SCRIPTS.forEach((script) => {
        let count = 0;
        if(inScript(string.codePointAt(index), script)) {
            count++;
        }
        stats[script.name] = count;
        return stats;
    });

    return stats;
}

console.log(iterString(string));
