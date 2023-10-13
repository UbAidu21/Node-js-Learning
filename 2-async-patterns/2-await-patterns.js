const { readFile, writeFile } = require("fs");
const util = require('util')
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// ////Promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {

//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }



// getText('./contents/first.txt')
//     .then(result => console.log(result))
//     .catch((error) => console.log(error));

// getText('./contents/second.txt')
//     .then(result => console.log(result))
//     .catch((error) => console.log(error));



// const start = async () => {
//     try {

//         const first = await getText('./contents/first.txt');
//         const second = await getText('./contents/second.txt');

//         console.log(first, second);

//     } catch (error) {
//         console.log(error);
//     }
// }

const start = async () => {
    try {

        const first = await readFilePromise('./contents/first.txt', 'utf-8');
        const second = await readFilePromise('./contents/second.txt', 'utf-8');

        await writeFilePromise('./contents/result-checker.txt', `This is Awesome: ${first} ${second}`)


        console.log(first, second);

    } catch (error) {
        console.log(error);
    }
}
start()