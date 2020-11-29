# 타입스크립트 스터디 5일차

## 타입 기초

```ts
let str: string = "hello";
let arr: Array<number> = [1, 2, ,3];
//let heroes: Array<string> = ['Spidy', 'Capt', 20]; #error
let items: number[] = [4, 5, 6];
```

## 튜플, 오브젝트, 오브젝트의 타입 체크

```ts
//Tuple
let address: [string, number] = ['pangyo', 40];

//Object
let obj:object = {};

let person: object = {
    name: 'spidy',
    age: 10
};

let hero: {name: string, age: number} = {
    name: 'capt',
    age: 300
}
```

## 함수 parameter 및 리턴 타입 정의

- js와는 달래 매개변수 갯수도 체크한다.

```ts
function add(a:number, b:number) {
  return a + b;
}

function ten(): number {
  return 10;
}

function sub(a: number, b: number): number {
  return a - b;
}

console.log(sub(10, 5));
//sub(1, 2, 3); #error
```

## optional parameter

```ts
function foo(a: string, b?:string) {
    console.log(`${a} ${b}`);
}

function bar(a: string, b:string='world') {
    console.log(`${a} ${b}`);
}

console.log(sub(10, 5));
//sub(1, 2, 3); #error

foo('hello');
bar('hello');
```