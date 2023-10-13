const _ = require('lodash');

const items = [1, [3, [2, [23, [4]]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);