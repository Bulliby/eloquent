class Test
{
    constructor() {
        this.value = false;
    }

    hasOwnProperty() {
        return "Hello";
    }
}

let test = new Test();

//Definitely not the solution
//console.log(test.__proto__.__proto__.hasOwnProperty("value"));

//The solution
console.log(Object.prototype.hasOwnProperty.call(test, "value"));
