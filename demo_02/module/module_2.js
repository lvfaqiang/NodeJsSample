function Hello(...name){
    var sayHello =  function sayHello(...name){
        for (let index = 0; index < name.length; index++) {
            let element = name[index];
            console.log("item ---- ",element)
        }
        console.log("massage" ,name)
    }
    sayHello(name)
}

exports = Hello // == module.exports = Hello