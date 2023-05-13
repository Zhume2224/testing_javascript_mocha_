const assert = require('assert');
const Decorator=require('../models/decorator.js')
const Room=require('../models/room.js')
const Paint=require('../models/paint.js')



describe('Decorator',function(){
    let deco1;
    let room1;

    let red;
    let white;
    let yellow;

    // let stock=[paint1,paint2,pain3];
    // let stock=[]

    this.beforeEach('Decorator',function(){
        deco1=new Decorator();
        room1=new Room(10);

        red=new Paint(2);
        white=new Paint(9);
        yellow=new Paint(5)

    });

   it('should start with an empty paint stock',function(){
       assert.deepStrictEqual(deco1.stock,[])
   })

   it('should be able to add cans of paint to paint stock',function(){
    const actual=deco1.addCan(red)
    assert.deepStrictEqual(actual,[red])
   })

   it('should be able to calculate total litres of paint in stock',function(){
    deco1.addCan(red)
    deco1.addCan(white)
    const actual=deco1.calcPaint()
    assert.strictEqual(actual,11)
   })

   it('should be able to check wether paint in stock in enough to paint the whole area in a room',function(){
    deco1.addCan(red)
    deco1.addCan(white)
    // const stock=deco1.calcPaint() //11
    const actual=deco1.checkPaint(room1)
    assert.strictEqual(actual,true)
   })


   it('should be able to paint the room if there is enough paint in stock',function(){
    deco1.addCan(red)
    deco1.addCan(white)
    const actual=deco1.paintRoom(room1)
    assert.strictEqual(actual,true)
   })


})
