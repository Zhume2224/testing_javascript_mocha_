const IsogramFinder = function (word) {
this.wordToLow=word.toLowerCase()

}


//way1
IsogramFinder.prototype.isIsogram = function () {
    const turnToArray = this.wordToLow.split('');
    return turnToArray.every(
      (letter, index) => {
        return turnToArray.indexOf(letter) === index;
      }
    );
  };
  

//way2
// IsogramFinder.prototype.isIsogram = function () {
//     const trunObject=new Set(this.wordToLow);
//     return trunObject.size===this.wordToLow.split('').length

// }




module.exports = IsogramFinder;
