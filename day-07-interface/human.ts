interface Human {
    [child: string]: number | string;
    name: string;
    age: number;    
}

const honux: Human = {
    name: "Hoyoung",
    age: 25,
    yejin: 9,
    sua: "Developer"
}

console.dir(honux);