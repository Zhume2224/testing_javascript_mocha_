const assert = require('assert');
const Paint=require('../models/paint.js')

//paint is in can; one can==one litre;
describe('Paint',function(){
let paint1;

    this.beforeEach(function(){
paint1=new Paint(2);
    });


it('should have a number of litres of pain in cans',function(){
    assert.strictEqual(paint1.canNumber,2)
});
it('should be able to check if the paintcan is empty',function(){
    const actual=paint1.canFull()
    assert.strictEqual(actual,true)
});
it('should be able to empty the paintcan',function(){
    const actual=paint1.emptyCan()
    assert.strictEqual(actual,0)
});



})