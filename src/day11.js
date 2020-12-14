var Dog = (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
        Dog.numTail = 1;
    }
    Dog.prototype.hi = function () {
        console.log("Hello " + this.name + ": " + this.age + " " + Dog.numTail);
    };
    return Dog;
})();
function foo(d) {
    d.hi();
}
var d1 = new Dog('Nabi', 3);
var d2 = new Dog('Zelda', 10);
foo(d1);
foo(d2);
