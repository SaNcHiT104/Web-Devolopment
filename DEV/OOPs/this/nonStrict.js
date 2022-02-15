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
//summary
// context : Node-Nstrict
// global area ->empty object
// function->global object
//object->function->return object
// object->function->function->global object 