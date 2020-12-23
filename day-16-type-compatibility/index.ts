interface Ironman {
    name: string;
}

class Avengers {
    name: string;
    power: number;
    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }
}

let tony: Ironman;
tony = new Avengers('Tony', 200);
