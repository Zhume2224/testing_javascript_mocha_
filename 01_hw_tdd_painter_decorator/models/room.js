const Room=function(area,painted=false){
    this.area=area;
    this.painted=painted;
};


Room.prototype.isPainted=function(){
    this.painted=true
    return this.painted 
}


















module.exports=Room;