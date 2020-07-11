class Group
{
    constructor() {
        this.data = [];
    }

    alreadyExists(newData) {
        return this.data.indexOf(newData);
    }

    add(elem) {
        if (this.alreadyExists(elem) == -1) {
            this.data.push(elem);
        }
    }

    delete(elem) {
        let index;
        if ((index = this.alreadyExists(elem)) != -1) {
            delete this.data[index];
        }
    }

    toString() {
        return `[ ${this.data.reduce((acc, cur) => {
            return `${acc}, ${cur}`;
        }) } ]`;
    }

    from(values) {
        if (values[Symbol.iterator] === undefined) {
            throw ('Not iterrable');
        }
       
        this.data = [];

        for (const value of values) {
            this.add(value);
        }

        return this.data;
    } 
}

class GroupIterator
{
    constructor(group){
        if (group instanceof Group === false) {
            throw ("You must give a Group instance");
        }

        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index === this.group.data.length) {
            return {done: true};
        }

        let value = this.group.data[this.index];
      
        this.index++;

        return {value, done: false}
    }

}

let mySet =  new Group();

mySet.add("toto");
mySet.add("tata");
mySet.add("tutu");
mySet.add("TUTU");
mySet.add("toto");

mySet.from([10, 111]);

//console.log(`${mySet}`);

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (const set of mySet) {
    console.log(set);
}

