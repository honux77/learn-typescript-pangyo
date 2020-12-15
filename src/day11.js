var Dog = (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
        Dog.numTail = 1;
    }
    Dog.prototype.hi = function () {
        console.log("Hello I am " + this.name + " and I am " + this.age + " years old");
    };
    Dog.wow = function () {
        console.log("We are Dogs and We have " + Dog.numTail + " tail(s)!");
    };
    return Dog;
})();
function foo(d) {
    d.hi();
}
var d1 = new Dog('Nabi', 3);
var d2 = new Dog('Zelda', 10);
foo(d1);
d2.hi();
Dog.wow();
