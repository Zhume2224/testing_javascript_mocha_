const assert = require('assert');
const Room=require('../models/room.js');




describe('Room', function(){
    let room1;
    
    this.beforeEach(function(){
        room1=new Room(10);
        
    });

    it('should have an area in squremeters',function(){
        assert.strictEqual(room1.area,10)
    })
    it('should be able to check whether the room is not painted',function(){
        assert.strictEqual(room1.painted,false)
    })
    it('should be able to check whether the room is able to be painted',function(){
        const actual=room1.isPainted()
        assert.strictEqual(actual,true)
    })

})