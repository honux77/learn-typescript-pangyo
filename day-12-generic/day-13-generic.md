# Learn TS Day 12, 13 Generic

## Generic 기본 사용법

```ts
function log<T>(v: T): T {
    console.log(v);
    return v;
}

const v2 = log<string>("hello");
console.log(v2);
```

## 인터페이스에 제네릭 사용하기

```ts
interface Item <T> {
  value: T;
  selected: boolean;
}

const emails:Item <string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

```

## 제네릭 타입 제한

```ts
interface LengthType {
    length: number;
}

function printSize<T extends LengthType> (items: T): number {
    console.log(items.length);
    return items.length;
}

printSize<number[]>([1, 2, 3, 4, 5]);
```

## extends keyof

- <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html>

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; 
}
```