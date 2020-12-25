function add(a, b) {
    return a + b;
}
function ten() {
    return 10;
}
function sub(a, b) {
    return a - b;
}
/**
 * 옵셔널 패러미터 사용해 보는 함수
 * @param a simple string
 * @param b optional string
 */
function foo(a, b) {
    console.log(a + " " + b);
}
console.log(sub(10, 5));
//sub(1, 2, 3); #error
foo('hello');
