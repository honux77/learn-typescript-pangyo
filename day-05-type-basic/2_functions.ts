function add(a:number, b:number) {
  return a + b;
}

function ten(): number {
  return 10;
}

function sub(a: number, b: number): number {
  return a - b;
}


/**
 * 옵셔널 패러미터 사용해 보는 함수
 * @param a simple string
 * @param b optional string
 */
function foo(a: string, b?:string) {
    console.log(`${a} ${b}`);
}

function bar(a: string, b:string='world') {
    console.log(`${a} ${b}`);
}

console.log(sub(10, 5));
//sub(1, 2, 3); #error

foo('hello');
bar('hello');
