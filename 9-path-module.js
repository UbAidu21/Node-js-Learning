const path = require('path');

console.log(path.sep);

///JOin methods

const filePath = path.join('/content/', '/subfolder', 'te.txt')
console.log(filePath);

const base = path.basename(filePath)

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'te.text')
console.log(absolute);