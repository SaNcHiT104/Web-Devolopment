let promise = new Promise(function(resolve,reject){ // to make new promise
    const a = 'Hello'
    const b = 'hello'               //resolve is linked with then
                                    //reject is linked with catch
    if(a==b){
        resolve('They are equal') //then mai data bnkr ja raha ahai ye string
    }
    else{
        reject('they are not equal')
    }
})
promise.then(function(data){
    console.log('Equal '+ data)
})
promise.catch(function(data){
    console.log('Not equal ' + data) //data reject mai jo likha hai vo aayega
})