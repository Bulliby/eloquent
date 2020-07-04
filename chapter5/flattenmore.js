// ************************************************************************** //
//                                                                            //
//                                                                            //
//   flattenmore.js                                                           //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/06/27 18:10:03 by bulliby            \     \_\ \     /     //
//   Updated: 2020/06/27 18:27:18 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

let array = [1, 4, 5, [3, 2, [4, 1]], [ 6, 7, 8], [10, 15, [20]]];

const reducer = (acc, cur, index, src) =>  {
    if (typeof cur === 'object') {
        return cur.reduce(reducer, acc);
    } else {
        return acc.concat(cur);
    }
}

let ret = array.reduce(reducer, []);


console.log(ret.length);
