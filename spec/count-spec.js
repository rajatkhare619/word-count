const wordCount = require('../index');

describe('Word count', () => {
    it('should count the number of words', () => {
        let result = wordCount.count("mary had a", new Set('a'));
        expect(result.words).toBe(2);
        expect(result.uniqueWords).toBe(2);
    });

    it('should return zero for an empty string', () => {
        let result = wordCount.count("", new Set('a'));
        expect(result.words).toBe(0);
        expect(result.uniqueWords).toBe(0);
    });

    it('should work when stop words include all the words of the input', () => {
        let result = wordCount.count("mary had a", new Set(['mary', 'had', 'a']));
        expect(result.words).toBe(0);
        expect(result.uniqueWords).toBe(0);
    });
});
