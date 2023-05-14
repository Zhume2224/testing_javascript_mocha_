const AnagramFinder = function (word) {
this.word=word
this.lengthOfWord=word.split('').length
this.sortedWord=word.toLowerCase().split('').sort().join('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result=[]
const sorted=otherWords.forEach(
   (word)=>{
    const eachLength=word.split('').length
    const eachSorted=word.toLowerCase().split('').sort().join('');
    if (eachLength>=this.lengthOfWord && eachSorted==this.sortedWord && this.word.toLowerCase()!== word.toLowerCase() && eachLength>0
    ){
        result.push(word)
    }
})
 
    return result
}









module.exports = AnagramFinder;
