# Learn TS Day 6

## 샘플 프로젝트 환경 설정

- Eslint 만 사용한다.
- `ctrl + ,` 를 이용해서 `format on save`를 비활성화하자
- npm install 하면 준비 끝
- tsconfig.json에서`noImplicitAny` 속성을 true로 바꾸면 에러가 막 나기 시작한다.

## 타이핑

- ts에 타입을 지정하는 방법
- `any`로 기본타입을 지정한 후에 다시 적절한 타입으로 변환하는 방법이 일반적이다.
- 도저히 타입을 잘 모를 때는 any라도 사용하자.
- `void`: 리턴 타입이 없을 때 지정 가능

