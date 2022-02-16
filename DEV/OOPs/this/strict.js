'use strict'
console.log(this)
function f(){
    console.log(this)
}
f()
let obj ={
    name:"Sanchit",
    f:function(){
        console.log(this)
    }
}
obj.f()
let obj2 ={
    name:"Sanchit",
    f:function(){
        function g(){
            console.log(this)
        }
        g()
    }
}
obj2.f()
// summary
// context:node+strict
// global area->empty object
// function->undefined
// object->function->object itself
// object-fn-fn-undefined