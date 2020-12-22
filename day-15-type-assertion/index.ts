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