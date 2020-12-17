# Learn TS Day 12, 13 Generic

## Generic 기본 사용법

```
function log<T>(v: T): T {
    console.log(v);
    return v;
}

const v2 = log<string>("hello");
console.log(v2);
```

## 인터페이스에 제네릭 사용하기

```
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