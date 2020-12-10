# Learn TS day 9

## Union type

- `|` 연산자를 사용해서 두 타입을 묶어서 사용할 수 있음

```
type value = number | string;

function log(value:value) {
    if (typeof value === "string") { //type guard
        console.log("String: " + value);
        return;
    }
    console.log("Number: " + value);

}

log("hello");
log(50);
//log({value: 30}) //error
```

## Intersection type

- `|` 대신에 `&` 연산자를 사용한다. 둘 조건 모두 만족해야 한다.
- Union이 더 많이 사용된다.

```
type Animal = {
    age: number;
    name: string;
    weight: number;
}

type Bird = {
    age: number;
    name: string;
    canFly: boolean;
}

//intersection
function hi(a: Animal & Bird) {
    console.log(a.age);
    console.log(a.name);
    console.log(a.weight;
    console.log(a.canFly);
}

```