class Dog {
    public name: string;
    private age: number;
    public static numTail: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Dog.numTail = 1;
    }

    hi(): void {
      console.log(`Hello I am ${this.name} and I am ${this.age} years old`);  
    }

    static wow(): void {
        console.log(`We are Dogs and We have ${Dog.numTail} tail(s)!`);
    }
}

function foo(d: Dog) : void {
    d.hi();
}

const d1 = new Dog('Nabi', 3);
const d2 = new Dog('Zelda', 10);

foo(d1);
d2.hi();
Dog.wow();
