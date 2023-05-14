const PangramFinder = function (phrase) {
  this.phrase=phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.sortedAlphabet='qwertyuiopasdfghjklzxcvbnm'.toLowerCase().split('').sort();
}


PangramFinder.prototype.isPangram = function () {
  const phraseSet = new Set(this.phrase.toLowerCase());
  for (const letter of this.sortedAlphabet) {
    if (!phraseSet.has(letter)) {
      return false;
    }
  }
  return true;
}

    
// if a letter is not found in the phrase, it will return "false" and exit the function. If all letters are found in the phrase, it will return "true" after checking all the letters.









// A pangram is a sentence or phrase that contains every letter of the alphabet at least once.
module.exports = PangramFinder;
