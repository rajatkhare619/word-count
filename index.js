const utils = require('./utils');

getData = async function() {
    const text = await utils.readLine('Enter text ');
    const stopWords = new Set(await utils.readStopWords());
  count(text, stopWords);
}

module.exports.count = function(text, stopWords) {
    const regEx = /([a-zA-Z])+/g;
    let match = text.match(regEx);
    let length = 0;
    let unique = 0;
    if (match) {
        match = match.filter(word => !stopWords.has(word));
        length = match.length;
        unique = new Set(match).size;
    }
    // return `Number of words: ${length}, unique: ${unique}`;
    return {words: length, uniqueWords: unique};
}
//count();


