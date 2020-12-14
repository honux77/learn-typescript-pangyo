# Learn TS Panyo Day 11

## 클래스

- JS는 프로토타입 기반으로 상속을 한다.
- 최상위 객체는 Object이다.
- 생성자 함수에는 prototype 속성이 붙는데 복잡하다.
- 클래스 문법은 생성자 함수의 syntax sugar 이다.

```js
function Cat(name) {
    this.name = name;
}

class Cat {
    constructor(name, color) {
        this.name = name;
    }
}

let nabi = new Cat('Nabi', 3);
console.log(nabi);
console.log(Cat.prototype === nabi.__proto__); //true
```

## 프로토타입

- [MDN 참고자료](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

```js
let user = {name: 'honux', age: 25};
let admin = {isAdmin:true}
admin.__proto__ = user;

console.log(admin.name, admin.age, admin.isAdmin);
console.log(user.__proto__); //Object
console.log(user.__proto__.__proto__ === null); //null
```

## TS 클래스

JS보다 조금 더 클래스스럽다. 좋군!

```
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
```