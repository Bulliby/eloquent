// ************************************************************************** //
//                                                                            //
//                                                                            //
//   flatten.js                                                               //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/06/27 17:26:19 by bulliby            \     \_\ \     /     //
//   Updated: 2020/06/27 18:09:26 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

let array = [1, 4, 5, [3, 2, [4, 1]]];

let ret = array.reduce((acc, cur, index, src) => {
    return acc.concat(cur);
}, []);

console.log(ret);
