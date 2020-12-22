# day 14 type assertion

## type assertion

```js
const div = document.querySelector('#main') as HTMLDivElement;
div.innerHTML = 'hello';
```

 이전에 에러난 코드를 type assertion을 이용하면 고칠 수 있었다.

 ```js
 setTimeout(() => {
  let tony = book.findContactByPhone(11122223333, PhoneType.Home);
  let app = document.querySelector("#app") as HTMLDivElement;
  app.innerHTML = JSON.stringify(tony);
}, 1000);

 ```

 ## type guard

 ```js
 interface Human {
    name: string,
    age: number
}
interface Developer extends Human{    
    lang: string
}

interface Hero extends Human {
    weapon: string
}

function foo(): Developer | Hero {
    return {name: 'honux', age: 50, lang: "java"};
}

function isDeveloper(human: Developer | Hero) : human is Developer{
    return (human as Developer).lang !== undefined;
}

let honux = foo();
if (isDeveloper(honux)) {
   console.log(honux.lang);
} else {
    console.log(honux.weapon);
}
 ```



