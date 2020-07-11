// ************************************************************************** //
//                                                                            //
//                                                                            //
//   vectors.js                                                               //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/07 16:16:43 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/07 21:43:43 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

/**
 * Initialise an Object with an empty Object (or without parent) as parent.
 */

function Vector(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('Not a number');
    }
    this.x = x;
    this.y = y;
}

Vector.prototype.toString = function () {
    return `The vector X position is ${this.x}, the vector Y position is ${this.y}`;
}

Vector.prototype.plus = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
}

let vectorOne = new Vector(10, 3);
let vectorTwo = new Vector(1, 5);

let minus = vectorOne.minus(vectorTwo);
console.log(minus);
let plus = vectorOne.plus(vectorTwo);
console.log(`${plus}`);
vectorOne.length;
