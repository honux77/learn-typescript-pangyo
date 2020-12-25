# TS Study Day 7 인터페이스

## Interface

- 인터페이스는 규약이다. by 토비님

```ts
interface User {
    age: number,
    name: string
}

let user1: User = {
    age: 25,
    name: 'Minsoo'
}
```

## 함수 매개변수 정의

```ts
function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}
```

## 함수 시그니쳐 정의

## Interface

```ts
interface User {
    age: number,
    name: string
}

let user1: User = {
    age: 25,
    name: 'Minsoo'
}
```

## 함수 매개변수 정의

```ts
function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}
```

## 함수 시그니쳐 정의

```ts
interface updateUser {
    (user:User, year:number): User;
}

const addYear: updateUser = function(user, year) {
    user.age += year;
    return user;
};
```

## 배열 인터페이스

- 이 부분 나중에 나오는데 헷갈린다. 잘 기억해 놓다.

```ts
interface StringArray {
    [index: number]: string;
}

const names: StringArray = ['apple', 'banana', 'carrot'];
//names[4] = 30; error
```

## 객체 키 정의하기

- 이런 식으로도 가능

```ts
interface Human {
    [child: string]: number | string;
    name: string;
    age: number;    
}

const honux: Human = {
    name: "Hoyoung",
    age: 25,
    yejin: 9,
    sua: "Developer"
}

console.dir(honux);
```
