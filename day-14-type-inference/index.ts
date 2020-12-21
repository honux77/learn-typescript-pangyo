//값을 이용한 기본적인 타입 추론
const a = 10;

function foo(b = 10) {
    return b + '10';    
}

//interface와 generic을 이용한 타입 추론
interface Item<T> {
    value: T,
    title: string
}

const v: Item <number> = {
    value: 100,
    title: 'score'
}

//best common type
const a1 = [1, 2, 3];
const a2 = [1, 2, true];
const a3 = [1, 2, true, 'hello'];