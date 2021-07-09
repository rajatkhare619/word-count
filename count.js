let count = function(text, stopWords) {
    const regEx = /([a-zA-Z-])+/g;
    let match = text.match(regEx);
    let length = 0;
    let unique = 0;
    if (match) {
        match = match.filter(word => !stopWords.has(word));
        length = match.length;
        unique = new Set(match).size;
    }
    return {words: length, uniqueWords: unique};
}

module.exports = {count};
