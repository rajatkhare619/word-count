const utils = require('./utils');
const {count} = require('./count');

let logCount = async function() {
    const text = await utils.readLine('Enter text ');
    const stopWords = new Set(await utils.readStopWords());
    const wordCount = count(text, stopWords);
    console.log(`Number of words: ${wordCount.words}, unique: ${wordCount.uniqueWords}`);
}

logCount();

module.exports = {count};
