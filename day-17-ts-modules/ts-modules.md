# 타입 스크립트 모듈

## 모듈

ES6+ Modules 개념과 유사

- <https://joshua1988.github.io/ts/usage/modules.html>
- <https://babeljs.io/docs/en/learn#modules>

mathf.ts

```ts
export class Mathf {
    static readonly PI: number = 3.14159265358979;
    static isEven(num:number): boolean {
        return num % 2 === 0;
    }
}
```

index.ts

```ts
import {Mathf} from './Mathf'

console.log(Mathf.PI);
console.log(Mathf.isEven(2));
```

## ES6 모듈

- <https://joshua1988.github.io/vue-camp/es6/modules.html> 살펴보자

## 프로젝트 실섭

- 13일차 프로젝트 Todo에 모듈을 적용해 보자.

