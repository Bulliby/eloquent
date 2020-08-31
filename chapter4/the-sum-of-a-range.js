// ************************************************************************** //
//                                                                            //
//                                                                            //
//   the-sum-of-a-range.js                                                    //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/08/31 21:35:41 by bulliby            \     \_\ \     /     //
//   Updated: 2020/08/31 21:49:33 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

function range (start, end, step = (start < end) ? 1 : -1) {
    let ret = [];

    if (step == 0) {
        throw error('Step can\'t be null');
    }

    if (start < end && step > 0) {
        for (i = start; i <= end; i+=step) {
            ret.push(i);
        }
    } else if (start > end && step < 0) {
        for (i = start; i >= end; i+=step) {
            ret.push(i);
        }
    } else {
        throw error('Unexpected usage');
    }

    return ret;
}

console.log(range(2, 10, 1));
