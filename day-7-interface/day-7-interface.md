# TS Study Day 7

## Interface

```
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

```
function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}
```

## 함수 시그니쳐 정의# TS Study Day 7

## Interface

```
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

```
function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}
```

## 함수 시그니쳐 정의

```
interface updateUser {
    (user:User, year:number): User;
}

const addYear: updateUser = function(user, year) {
    user.age += year;
    return user;
};
```

## 배열 인터페이스

```
interface StringArray {
    [index: number]: string;
}

const names: StringArray = ['apple', 'banana', 'carrot'];
//names[4] = 30; error
```
