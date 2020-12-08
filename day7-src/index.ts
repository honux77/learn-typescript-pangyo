interface User {
    age: number,
    name: string
}

let user1: User = {
    age: 25,
    name: 'Minsoo'
}

function printUser(user: User) {
    console.log(user.age);
    console.log(user.name);
}

interface updateUser {
    (user:User, year:number): User;
}

const addYear: updateUser = function(user, year) {
    user.age += year;
    return user;
};

interface StringArray {
    [index: number]: string;
}

const names: StringArray = ['apple', 'banana', 'carrot'];
//names[4] = 30; error

interface StringRegExPair {
    [key: string]: RegExp;
}

const files: StringRegExPair = {
    node: /\.js$/,
    dotnet: /\.cs$/
}


interface Developer extends User {
    language: string
}

function study(u: Developer) {
     console.log(`${u.name} is studying ${u.language}.`);
}

study({age: 20, name: 'JJ', language: 'ts'});
