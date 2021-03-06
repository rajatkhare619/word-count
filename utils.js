const readline = require('readline');
const {
  readFile,
} = require('fs');


const readLine = (question) => new Promise((resolve) => {
  const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rlInterface.question(question, (line) => {
    resolve(line);

    rlInterface.close();
  });
});

const splitBufferByLines = (buffer) => buffer.toString().split('\n').filter(Boolean).map(word => word.replace('\r', ''));

const readFilePromise = (filename) => new Promise((resolve, reject) => readFile(filename, (error, data) => {
  if (error) {
    reject(error);
  } else {
    resolve(data);
  }
}));

const readStopWords = () => readFilePromise('stopwords.txt').then(splitBufferByLines);

const readDictionary = () => readFilePromise('dictionary.txt').then(splitBufferByLines);

module.exports = {
  readLine,
  readStopWords,
  readDictionary,
};
