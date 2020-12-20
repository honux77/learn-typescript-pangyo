# TS 3일차

## submodule 사용법 블로깅

- 공부하다가 원본 저장소가 필요했는데 귀찮아서 서브모듈로 클론해 왔다.
- 하는 김에 [블로깅](https://honux77.github.io/post/%EA%B9%83-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%EB%B2%95/)도 같이 했다.

## 타입스크립트의 장점 1

- <https://github.com/joshua1988/learn-typescript/tree/master/why-ts>
- 타입이 있어서 오류를 방지해 준다. 
- [jsdoc](https://devdocs.io/jsdoc/)은 자바독과 사용법이 비슷해 보인다.
- 주석으로 타입을 정의했더니 자동완성이 된다. 신기하구나!

## 타입스크립트의 장점 2

-  자동완성을 잘 사용할 수 있다.

```ts
function add(a:number, b:number): number {
    return a + b;
}

const a = 10;
const b = 20;

console.log(add(a, b));
```

## js를 ts처럼 사용하기

- jsdoc과 ts_check 어노테이션을 활용하면 js를 ts처럼 사용할 수 있다.

```js

// @ts_check
/**
 * 
 * @param {Number} a first number
 * @param {Number} b second number
 */
function add2(a, b) {
    return a + b;
}
//const add2 = (a, b) => a + b;

const n3 = add2(10, 'hello');
console.log(n3);

```
