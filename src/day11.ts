class Dog {
    public name: string;
    private age: number;
    public static numTail: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Dog.numTail = 1;
    }

    hi() {
      console.log(`Hello ${this.name}: ${this.age} ${Dog.numTail}`);  
    }
}

function foo(d: Dog) : void {
    d.hi();
}

const d1 = new Dog('Nabi', 3);
const d2 = new Dog('Zelda', 10);

foo(d1);
foo(d2);
