const Paint=function(canNumber){
this.canNumber=canNumber;

}


//way1, longer code: 
// Paint.prototype.canFull=function(){
// if (this.canNumber>0){
// return true}
// else {return false }
// }

Paint.prototype.canFull = function() {
    return this.canNumber > 0;
  };



Paint.prototype.emptyCan=function(){
    this.canNumber=0
    return this.canNumber
}


















module.exports=Paint;