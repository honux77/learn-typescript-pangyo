var User = (function () {
    function User(age, name) {
        this.age = age;
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("Hi I am ${this.name}");
    };
    return User;
})();
var u = new User(15, 'honux');
u.sayHi();
var w = {
    age: 20,
    name: 'sua',
    nextYear: function () {
        this.age++;
    }
};
w.nextYear();
console.log(w);
