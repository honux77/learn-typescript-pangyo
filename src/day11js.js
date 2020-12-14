//class
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let nabi = new Cat('Nabi', 3);
console.log(nabi);
console.log(Cat.prototype === nabi.__proto__);

//prototype
let user = {name: 'honux', age: 25};
let admin = {isAdmin:true}
admin.__proto__ = user;

console.log(admin.name, admin.age, admin.isAdmin);
console.log(user.__proto__); //Object
console.log(user.__proto__.__proto__ === null); //null
