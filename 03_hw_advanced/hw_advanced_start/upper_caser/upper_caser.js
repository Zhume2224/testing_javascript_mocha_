const UpperCaser = function (words) {
    this.words = words;
  };
  
//   UpperCaser.prototype.toUpperCase = function () {
//     return this.words.map(word => word.toUpperCase());
//   };
  
  UpperCaser.prototype.toUpperCase = function () {
    const newwords=[];
    for (const word of this.words){
          const newWord=word.toUpperCase();
           newwords.push(newWord);
        } 
        return newwords
    }



  
module.exports = UpperCaser;
