# TS study 8일차

## 타입 별칭

- `type` 키워드를 이용해서 사용자 정의 타입을 만드는 것을 말한다.
- 새로운 타입을 생성하지 않고 기존에 있는 타입에 별칭을 부여하는 것이다.

```
type Name = string;

interface User {
  age: number;
  name: Name;
}

type Man = User;

const honux: Man = {
  age: 15,
  name: "Hoyoung Linux Jung",
};

```


