const utils = require('./utils');

async function count() {
    const text = await utils.readLine('Enter text ');
    const regEx = /([a-zA-Z])+/g;
    const stopWords = new Set(await utils.readStopWords());
    let match = text.match(regEx);
    let length = 0;
    if (match) {
        match = match.filter(word => !stopWords.has(word));
        length = match.length;
    }
    console.log(`Number of words: ${length}`);

}
count();


