'use strict';

class HashTable {
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }

  //-----Hash-----//
  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    console.log(asciiSum);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  //-----Set-----//
  set(key, value){
    let position = this.hash(key);
    this.table[position] = value;
  }


  //-----Get-----//
  get(key){
    let position = this.hash(key);
    return this.table[position];
  }

  //-----Has-----//
  has(key){
    let position = this.hash(key);
    let val = this.table[position];
    return val
      ? true
      : false;
  }

  //-----Keys-----//
  keys() {
    return this.table.reduce((result, value, key) => {
      if (value !== undefined) {
        result.push(key);
      }
      return result;
    }, []);
  }
}

const table = new HashTable(1024);
const hashOne = table.hash('John');
const hashTwo = table.hash('Ryan');
const hashThree = table.hash('Marco');

console.log('table', table);
console.log('hashOne:', hashOne);
console.log('hashTwo:', hashTwo);
console.log('hashThree:', hashThree);

// //-----Set Proof of Life-----//
table.set('bob', '123-456-7890');
table.set('george', '123-456-7891');
table.set('asdasd', '703-608-1231232');
table.set('bob', '703-608-NEWNUMBER');
table.set('key2', 'value2');
table.set('key3', 'value3');
console.log("Checking HAS");
console.log("========================");
console.log(table.has('proof of life for HAS'));
console.log("========================");
console.log("Checking GET");
console.log(table.get('asdasd'));
console.log(table.get('sdfsdfsdfasdf'));
console.log("Checking KEYS");
console.log("========================");
console.log(table.keys());
console.log("========================");
console.log('proof of life for SET', table);



//-----Repeated Word Function-----//
function repeatedWord(str) {
  const theseUnsHereAintNoWord = [' ', ',', '.', ';', ':', '-', '_', '!', '?'];
  const table = new HashTable(1024);
  let currentWord = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (theseUnsHereAintNoWord.includes(char)) {
      if (currentWord.length > 0) {
        if (table.has(currentWord)) {
          return currentWord;
        }
        table.set(currentWord, true);
        currentWord = '';
      }
    } else {
      currentWord += char;
    }
  }
  if (currentWord.length > 0 && table.has(currentWord)) {
    return currentWord;
  }
  return null;
}

repeatedWord('How much wood could a wood chuck chuck if a wood chuck could chuck wood?');

