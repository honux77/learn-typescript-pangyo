class User {
    age: number;
    name: string;

    constructor(age:number, name:string) {
        this.age = age;
        this.name = name;
    }

    sayHi(): void {
        console.log("Hi I am ${this.name}");
    }
}

const u = new User(15, 'honux');
u.sayHi();

interface Woman {
    age: number;
    name: string;
    nextYear(): void;
}

const w: Woman = {
    age: 20,
    name: 'sua',
    nextYear: function(): void {
        this.age++;
    }
}

w.nextYear();
console.log(w);
