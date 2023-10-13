const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

readFile('./contents/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./contents/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./contents/result-sync.txt',
            '\nHere is the Change:' + first + " " + second,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })

})