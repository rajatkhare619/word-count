const utils = require('./utils');


utils.readLine('Enter text ').then(res => {
    let regEx = /([a-zA-Z])+/g;
    let match = res.match(regEx);
    if (match) {
        console.log(`Number of words: ${match.length}`);
    } else {
        console.log(`Number of words: 0`);
    }
});



