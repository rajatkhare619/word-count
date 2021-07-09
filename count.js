let count = function(text, stopWords) {
    const regEx = /([a-zA-Z-])+/g;
    let match = text.match(regEx);
    let length = 0;
    let unique = 0;
    let average = 0;
    let sum = 0;
    //sum of lenght of each word/ word count
    if (match) {
        match = match.filter(word => !stopWords.has(word));
        match.forEach(word => {
            sum += word.length;
        })
        // console.log(sum);
        length = match.length;
        unique = new Set(match).size;
    }
    return {words: length, uniqueWords: unique, averageLength: sum/length};
}

module.exports = {count};
