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

type Human = {
    age: number;
    name: Name;
}

const pangyo: Human = {
    age: 25,
    name: "Captain"
}

console.log(honux);
console.log(pangyo);