# TS 4일차

## tsc 설치

```
npm i -g typescript
```

## 컴파일

```
tsc index.ts
```

## ts 설정파일

tsconfig.json을 만들자

```
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "noImplicitAny": true
    }
}
```

## 참고자료

- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
- [설정파일](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## 플레이그라운드

- [ts playground](https://www.typescriptlang.org/play)
- [babel WEB REPL](https://babeljs.io/repl)

## 예제코드

```
class Monster {
    
    name:string
    hp:number
    power:number

    constructor(name:string, hp:number, power:number) {
        this.name = name;
        this.hp = hp;
        this.power = power;
    }
}

const monsters:Array<Monster> = new Array();
monsters.push(new Monster('Pang', 100, 5));
monsters.push(new Monster('Yul', 150, 4));
console.dir(monsters);
```

## 체크포인트

- tsc로 컴파일하면 생성되는 js 파일도 꼭 읽어보자. 공부에 큰 도움이 된다.
