/**
 * @author Sallar Kaboli <sallar.kaboli@gmail.com>
 * @date 07.09.2015
 * @TODO Remove this file
 */
var async = require('./async-arrays');

// Test Array
var nums = [1, 2, 3, 4, 5, 6, 7, 8];

// Map
async.map(nums, function (num, i, resolve) {
    resolve(num * 10);
}).then(function (result) {
    console.log(result);
});

// Filter
async.filter(nums, function (num, i, resolve) {
    resolve(num > 2 && num < 7);
}).then(function (result) {
    console.log(result);
});