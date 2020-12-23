# TS 16일차 타입 호환

## 타입 호환
- [참고링크](https://joshua1988.github.io/ts/guide/type-compatibility.html)
- 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는 경우를 의미함
- Type compatibility in TypeScript is based on structural subtyping
- Structural typing is a way of relating types based solely on their members. 

```ts
interface Ironman {
    name: string;
}

class Avengers {
    name: string;
    power: number;
    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }
}

let tony: Ironman;
tony = new Avengers('Tony', 200);

```

## 구조적 타이핑 (structua)

- 멤버 기반으로 타입을 연관시키는 방법 <-> nominal typing

## 함수와 타입 호환

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
//x = y; // Error
```

## 제네릭과 티입 호환

### 비어 있는 경우

```ts
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;

x = y; // OK, because y matches structure of x
```

### 내용이 채워진 경우

```ts
interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y; // Error, because x and y are not compatible
```
