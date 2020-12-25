type value = number | string;

function log(value:value) {
    if (typeof value === "string") {
        console.log("String: " + value);
        return;
    }
    console.log("Number: " + value);

}

log("hello");
log(50);
//log({value: 30}) //error


type Animal = {
    age: number;
    name: string;
    weight: number;
}

type Bird = {
    age: number;
    name: string;
    canFly: boolean;
}

//intersection
function hi(a: Animal & Bird) {
    console.log(a.age);
    console.log(a.name);
    console.log(a.weight;
    console.log(a.canFly);
}
