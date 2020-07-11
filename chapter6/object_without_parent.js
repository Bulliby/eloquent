// ************************************************************************** //
//                                                                            //
//                                                                            //
//   vectors.js                                                               //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/07 16:16:43 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/07 16:17:55 by bulliby             \________/\/\_/      //
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

Vector.prototype = Object.create(null);
let vector = new Vector(10, 32);
console.log(vector);
