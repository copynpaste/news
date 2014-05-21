/**
 * ownCloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */

const call = Function.prototype.call.bind(Function.prototype.call);
const hasOwn = Object.prototype.hasOwnProperty;

/**
 * From http://wiki.ecmascript.org/doku.php?id=harmony:iterators#standard_api
 * Allows to iterate over objects like for (let [key, value] of objects)
 */
window.items = function (obj) {
    'use strict';

    return {
        [Symbol.iterator]: function () {
            return (function*() {
                for (let x in obj) {
                    if (call(hasOwn, obj, x))
                        yield [x, obj[x]];
                }
            })();
        }
    };
}