// ************************************************************************** //
//                                                                            //
//                                                                            //
//   vectors_class.js                                                         //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/07 21:44:09 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/07 21:56:37 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

class Vector {
    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw ('Not a number');
        }
        this.x = x;
        this.y = y;
    }

    toString() {
        return `The vector X position is ${this.x}, the vector Y position is ${this.y}`;
    }

    plus() {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    minus() {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let vector = new Vector(10, 33);
console.log(`${vector.length}`);
