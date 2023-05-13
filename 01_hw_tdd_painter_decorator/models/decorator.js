
const Decorator=function(stock=[]){
this.stock=stock 
};



Decorator.prototype.addCan=function(can){
if (can.canNumber>0){
    this.stock.push(can)
    return this.stock
}
else{
    return 'cannot add empty can to stock'
}
}

Decorator.prototype.calcPaint = function() {
    const getTotal = this.stock.reduce((acc, current) => {
      return acc + current.canNumber;
    }, 0);
    return getTotal;
  }
  
Decorator.prototype.checkPaint=function(room){
    const totalStock=this.calcPaint()
    const needMore=room.area-totalStock
if (totalStock>=room.area){
    return true
}
else{return `not enough paint, need ${needMore} more.`}
}



Decorator.prototype.paintRoom=function(room){
if (this.checkPaint(room)){
        const roomPainted=room.isPainted()
        // room.isPainted()
        return room.painted
    }
}











module.exports=Decorator;
