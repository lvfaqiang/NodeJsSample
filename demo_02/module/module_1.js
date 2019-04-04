exports.world = function () {
    console.log("hello World")
}

function Name() {
    var name
    this.setName = function (tempName) {
        name = tempName
    }

    this.sayHello = function () {
        console.log("Hello ", name)
    }
}
exports.name = new Name()